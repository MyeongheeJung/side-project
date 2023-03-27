import { Modal } from "antd";
import { useState } from "react";
import { useLogout } from "../../../../commons/hooks/customs/useLogout";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { getDate } from "../../../../commons/libraries/getDate";
import Button from "../../button/Button";
import { ItemWrap } from "./styles";
import { IPropsType } from "./types";

const LoginMenus = ({ data, accessToken, onClickMenu }: IPropsType) => {
  const [open, setOpen] = useState(false);
  const { data: MyInfo } = useQueryFetchUserLoggendIn();
  console.log(data);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };
  // 로그인시 메뉴(토큰 있음)
  if (accessToken) {
    return (
      <>
        <ItemWrap>
          <li onClick={showModal}>{data?.fetchUserLoggedIn.name}님</li>
          <li onClick={useLogout}>로그아웃</li>
        </ItemWrap>
        <Modal
          title="개인 정보 확인"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>아이디: {data.fetchUserLoggedIn.email}</p>
          <p>이름: {data.fetchUserLoggedIn.name}</p>
          <p>가입일: {getDate(data.fetchUserLoggedIn.createdAt)}</p>
        </Modal>
      </>
    );
  } else {
    // 로그아웃시 메뉴(토큰 있음)
    return (
      <div>
        <Button name="SmallBtn" onClick={() => onClickMenu("/login")}>
          로그인
        </Button>
        <span style={{ marginRight: "6px" }}></span>
        <Button name="SmallBtn_Point" onClick={() => onClickMenu("/signup")}>
          회원가입
        </Button>
      </div>
    );
  }
};

export default LoginMenus;
