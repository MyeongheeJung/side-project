import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useLogout } from "../../../../commons/hooks/customs/useLogout";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { getDate } from "../../../../commons/libraries/getDate";
import { accessTokenState } from "../../../../commons/stores";
import { Container } from "../../../../commons/styles/container";
import ChargeComponent from "../../../units/charge/Charge.index";
import Button from "../../button/Button";
import { ItemWrap, LoginLists, LoginWrap } from "./styles";
import { IPropsType } from "./types";

const LoginMenus = () => {
  const router = useRouter();
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [openCharge, setOpenCharge] = useState(false);
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQueryFetchUserLoggendIn();

  // 로그인시 메뉴(토큰 있음)
  if (accessToken) {
    return (
      <LoginWrap>
        <Container>
          <LoginLists>
            <li onClick={() => setOpenUserInfo(true)}>
              {data?.fetchUserLoggedIn.name}님
            </li>
            <li onClick={() => setOpenCharge(true)}>
              💰{data?.fetchUserLoggedIn.userPoint.amount}
            </li>
            <li onClick={useLogout}>로그아웃</li>
          </LoginLists>
          <Modal
            title="개인 정보 확인"
            open={openUserInfo}
            onOk={() => setOpenUserInfo(false)}
            onCancel={() => setOpenUserInfo(false)}
          >
            <p>아이디: {data?.fetchUserLoggedIn.email}</p>
            <p>이름: {data?.fetchUserLoggedIn.name}</p>
            <p>가입일: {getDate(data?.fetchUserLoggedIn.createdAt)}</p>
          </Modal>

          <Modal
            title="금액 충전하기 💰"
            open={openCharge}
            onOk={() => setOpenCharge(false)}
            onCancel={() => setOpenCharge(false)}
          >
            <ChargeComponent />
          </Modal>
        </Container>
      </LoginWrap>
    );
  } else {
    // 로그아웃시 메뉴(토큰 있음)
    return (
      <LoginWrap>
        <Container>
          <LoginLists>
            <li onClick={() => router.push("/login")}>로그인</li>
            <li onClick={() => router.push("/signup")}>회원가입</li>
          </LoginLists>
        </Container>
      </LoginWrap>
    );
  }
};

export default LoginMenus;
