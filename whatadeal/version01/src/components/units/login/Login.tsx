import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useMutationLoginUser } from "../../../commons/hooks/mutations/useMutaionLoginUser";
import { accessTokenState } from "../../../commons/stores";
import { SubTitle } from "../../../commons/styles/text";
import Form from "../../commons/form";
import { schema_login } from "../../../commons/validation/schma";
import LoginForm from "./LoginForm";
import { IFormType } from "./type";

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema_login),
    mode: "onChange",
  });

  const onClickLogin: SubmitHandler<IFormType> = async (value) => {
    try {
      const result = await loginUser({
        variables: {
          email: value.email,
          password: value.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }
      setAccessToken(accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Form text="login">
      <SubTitle mb="2rem">Login</SubTitle>
      <LoginForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onClickLogin={onClickLogin}
      />
    </Form>
  );
}
