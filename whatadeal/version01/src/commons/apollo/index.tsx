import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}

const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // ✅ useRecoilValueLoadable로 글로벌 함수(restoreAccessTokenLoadable) 연동하기
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("accessToken") ?? "";

    // 2. 새로운방식(refreshToken 이후)
    void restoreAccessToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer asldkfjlasdk => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  // 토큰을 사용하려면 보안이 되는 https를 사용한다. http는 보안❌
  // headers에 accessToken 담아서 전달
  // credentials를 include해야 민감한 정보인 토큰을 담을 수 있다.
  const uploadLink = createUploadLink({
    uri: "https://backend10.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서중요!!! errorLink가 먼저
    cache: APOLLO_CACHE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해 놓기
  });

  // prettier-ignore
  return (
    <>
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    </>
  );
}
