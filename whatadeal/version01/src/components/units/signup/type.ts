import {
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormType {
  name: string;
  email: string;
  password: string;
}

export interface IPropsType {
  register: UseFormRegister<IFormType>;
  errors: Partial<FieldErrorsImpl<IFormType>>;
  handleSubmit: UseFormHandleSubmit<IFormType>;
  onClickJoin: SubmitHandler<IFormType>;
}
