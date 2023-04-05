import { LoginError, FormError } from "./style";

interface IErrorProps {
  name: string;
  text: string | undefined;
}

const Error = ({ name, text }: IErrorProps) => {
  switch (name) {
    case "LoginError":
      return <LoginError>{text}</LoginError>;
    case "FormError":
      return <FormError>{text}</FormError>;
    default:
      return <></>;
  }
};

export default Error;
