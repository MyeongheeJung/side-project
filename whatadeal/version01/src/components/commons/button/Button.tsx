import { MoreViewBtn, CancelBtn, LoginBtn, SubmitBtn, WriteBtn } from "./style";

interface IButtonProps {
  name: string;
  type?: "button" | "submit" | undefined;
  children?: string;
  onClick?: () => void;
}

const Button = ({ name, type, children, onClick }: IButtonProps) => {
  switch (name) {
    case "MoreViewBtn":
      return <MoreViewBtn onClick={onClick}>{children}</MoreViewBtn>;
    case "LoginBtn":
      return <LoginBtn>{children}</LoginBtn>;
    case "CancleBtn":
      return <CancelBtn>{children}</CancelBtn>;
    case "SubmitBtn":
      return (
        <SubmitBtn type={type} onClick={onClick}>
          {children}
        </SubmitBtn>
      );
    case "WhiteBtn":
      return (
        <WriteBtn type={type} onClick={onClick}>
          {children}
        </WriteBtn>
      );

    default:
      return <></>;
  }
};

export default Button;
