import { Modal } from "antd";
import { useRouter } from "next/router";
import { useQueryCreateUser } from "../../../commons/hooks/queries/useQueryCreateUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_join } from "../../../commons/validation/schma";
import SignupForm from "./SignupForm";
import Form from "../../commons/form";
import { IFormType } from "./type";
import { SubTitle } from "../../../commons/styles/text";

export default function Signup() {
  const router = useRouter();
  const [createUser] = useQueryCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema_join),
    mode: "onChange",
  });

  const onClickJoin = async (value: IFormType) => {
    console.log("value", value);
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: value.email,
            password: value.password,
            name: value.name,
          },
        },
      });
      Modal.success({ content: "회원가입에 성공하셨습니다." });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Form imgUrl="/border_bg.jpeg" text="Signup">
      <>
        <SubTitle mb="2rem">Signup</SubTitle>
        <SignupForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onClickJoin={onClickJoin}
        />
      </>
    </Form>
  );
}
