import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { DownCircleOutlined } from "@ant-design/icons";

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  touch-action: manipulation;
  border-radius: 2px;
  margin-top: 20px;
`;

export const LoginBtn = styled(Button)`
  width: 280px;
  height: 45px;
  font-size: 16px;
  letter-spacing: 1.5px;

  color: #fff;
  background: #1890ff;

  :hover {
    background-color: rgba(24, 144, 255, 0.75);
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

export const MoreViewBtn = styled(Button)`
  height: 3rem;
  line-height: 3rem;
  font-size: 12px;
  color: #666;

  &::after {
    content: ">";
  }
`;

export const GreyBtn = styled(Button)`
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;

  color: rgba(0, 0, 0, 0.85);
  border: 1px solid #d9d9d9;
  background: #fff;

  :hover {
    color: #1890ff;
    border: 1px solid #1890ff;
  }
`;

export const BlueBtn = styled(Button)`
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;

  color: #fff;
  background: #1890ff;

  :hover {
    background-color: rgba(24, 144, 255, 0.75);
  }
`;
