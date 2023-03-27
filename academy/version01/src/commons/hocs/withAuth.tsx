import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../stores";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreAccessToken.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({
          content: "로그인 후 이용 가능합니다!",
          afterClose() {
            void router.push("/login");
          },
        });
      }
    });
  }, []);

  return <Component {...props} />;
};
