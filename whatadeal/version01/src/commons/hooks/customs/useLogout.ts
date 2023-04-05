import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores";

export const useLogout = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  setAccessToken("");
  Modal.success({ content: "로그아웃이 되었습니다." });
};
