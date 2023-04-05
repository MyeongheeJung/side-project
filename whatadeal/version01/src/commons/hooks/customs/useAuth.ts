import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../stores";

export const useAuth = () => {
  const router = useRouter();
  const restoreToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreToken.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({
          content: `로그인이 필요합니다.`,
          afterClose() {
            void router.push("/login");
          },
        });
      }
    });
  }, []);
};
