import Button from "../../commons/button/Button";
import Error from "../../commons/errorMsg";
import Input from "../../commons/Input";
import { IPropsType } from "./type";

function SignupForm({
  register,
  errors,
  handleSubmit,
  onClickJoin,
}: IPropsType) {
  return (
    <form onSubmit={handleSubmit(onClickJoin)}>
      <Input
        name="LoginInput"
        inputProps={{
          type: "text",
          placeholder: "이름",
          ...register("name"),
        }}
      />
      <Error name="LoginError" text={errors.name?.message} />
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
      <Button name="LoginBtn">회원가입</Button>
    </form>
  );
}

export default SignupForm;
