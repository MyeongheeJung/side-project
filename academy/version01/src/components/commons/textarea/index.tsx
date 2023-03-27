import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

interface ICententsProps {
  register: UseFormRegisterReturn;
  defaultValue: string;
}

export function Contents01(props: ICententsProps) {
  return (
    <Contents
      {...props.register}
      defaultValue={String(props.defaultValue)}
    ></Contents>
  );
}
