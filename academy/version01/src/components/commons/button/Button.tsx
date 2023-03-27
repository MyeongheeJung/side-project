import {
  BounceBtn,
  CancelBtn,
  LoginBtn,
  MoreViewBtn,
  SmallBtn,
  SmallBtn_Point,
  SubmitBtn,
  WriteBtn,
} from "./style";

interface IButtonProps {
  name: string;
  type?: "button" | "submit" | undefined;
  children?: string;
  onClick?: () => void;
}

const Button = ({ name, type, children, onClick }: IButtonProps) => {
  switch (name) {
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
    case "MoreViewBtn":
      return <MoreViewBtn onClick={onClick}>{children}</MoreViewBtn>;
    case "BounceBtn":
      return <BounceBtn onClick={onClick} />;
    case "WriteBtn":
      return <WriteBtn onClick={onClick} />;
    case "SmallBtn":
      return (
        <SmallBtn type={type} onClick={onClick}>
          {children}
        </SmallBtn>
      );
    case "SmallBtn_Point":
      return (
        <SmallBtn_Point type={type} onClick={onClick}>
          {children}
        </SmallBtn_Point>
      );
    default:
      return <></>;
  }
};

export default Button;
