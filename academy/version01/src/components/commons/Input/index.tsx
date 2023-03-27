import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { LoginInput, SearchInput, WriteBigInput, WriteInput } from "./style";

interface IInputProps {
  name?: string;
  inputProps?: {
    type?: "text" | "password";
    placeholder?: string;
    register?: UseFormRegisterReturn<string>;
  };
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  inputProps,
  defaultValue,
  readOnly,
  onChange,
}: IInputProps) => {
  switch (name) {
    case "LoginInput":
      return <LoginInput {...inputProps} />;
    case "WriteInput":
      return (
        <WriteInput
          defaultValue={defaultValue}
          readOnly={readOnly}
          {...inputProps}
        />
      );
    case "WriteBigInput":
      return (
        <WriteBigInput
          defaultValue={defaultValue}
          readOnly={readOnly}
          {...inputProps}
        />
      );
    case "SearchInput":
      return <SearchInput {...inputProps} onChange={onChange} />;
    default:
      return <></>;
  }
};
export default Input;
