import Button from "../../commons/button/Button";
import Error from "../../commons/errorMsg";
import Input from "../../commons/Input";
import { IPropsType } from "./type";

const LoginForm = ({
  register,
  errors,
  handleSubmit,
  onClickLogin,
}: IPropsType) => {
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <Input
        name="LoginInput"
        inputProps={{
          type: "text",
          placeholder: "이메일",
          ...register("email"),
        }}
      />
      <Error name="LoginError" text={errors.email?.message} />
      <Input
        name="LoginInput"
        inputProps={{
          type: "password",
          placeholder: "패스워드",
          ...register("password"),
        }}
      />
      <Error name="LoginError" text={errors.password?.message} />
      <Button name="LoginBtn">로그인</Button>
    </form>
  );
};

export default LoginForm;
