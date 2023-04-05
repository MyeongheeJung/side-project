import {
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormType {
  email: string;
  password: string;
}

export interface IPropsType {
  register: UseFormRegister<IFormType>;
  errors: Partial<FieldErrorsImpl<IFormType>>;
  handleSubmit: UseFormHandleSubmit<IFormType>;
  onClickLogin: SubmitHandler<IFormType>;
}
