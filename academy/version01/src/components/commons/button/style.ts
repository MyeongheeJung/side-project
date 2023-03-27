import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { DownCircleOutlined } from "@ant-design/icons";

export const LoginBtn = styled.button`
  width: 280px;
  height: 45px;
  font-size: 16px;
  letter-spacing: 1.5px;
  border: none;
  border-radius: 45px;
  transition: all 0.3s ease 0s;

  cursor: pointer;
  background-color: #ff6868;
  color: #fff;

  margin-top: 20px;

  :hover {
    background-color: #111;
  }
`;

export const CancelBtn = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  border-radius: 53px;
  font-size: 16px;
  font-weight: 500;
  background-color: #bdbdbd;
  cursor: pointer;
`;

export const SubmitBtn = styled(CancelBtn)`
  color: #fff;
  background-color: #ff6868;

  &:hover {
    background-color: #000;
  }
`;

export const MoreViewBtn = styled.button`
  width: 200px;
  height: 45px;
  font-size: 16px;
  letter-spacing: 1.5px;
  color: #181818;
  background-color: #f8f8f8;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  margin-top: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(0);

  :hover {
    background-color: #fe2943;
    color: #fff;
    box-shadow: 0px 3px 10px rgba(10, 10, 10, 0.8);
    transform: translateX(-50%) translateY(-7px);
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(-50%,0,0);
  }

  40%, 43% {
    transform: translate3d(-50%, -30px, 0);
  }

  70% {
    transform: translate3d(-50%, -15px, 0);
  }

  90% {
    transform: translate3d(-50%, -4px,0);
  }
`;

export const BounceBtn = styled(DownCircleOutlined)`
  font-size: 50px;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);
  z-index: 10;
  animation: ${bounce} 1s infinite;
  cursor: pointer;

  :hover {
    color: #fe2943;
  }
`;

export const WriteBtn = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(235, 0, 0);
  color: white;
  font-size: 15px;
  cursor: pointer;
  border: none;
  transition: background 0.5 ease-in-out;

  :hover {
    background: black;
  }
`;

export const SmallBtn = styled.button`
  padding: 0 17px;
  font-size: 12px;
  height: 34px;
  line-height: 34px;
  border-radius: 17px;
  border: 1px solid #111;
  background: none;

  :hover {
    background: #111;
    color: #fff;
  }
`;

export const SmallBtn_Point = styled(SmallBtn)`
  background: #ff6868;
  color: #fff;
  border: none;
`;
