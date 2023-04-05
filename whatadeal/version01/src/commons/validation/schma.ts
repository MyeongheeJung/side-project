import * as yup from "yup";

export const schema_join = yup.object({
  name: yup
    .string()
    .required("id를 입력해주세요")
    .matches(/^([a-zA-Z0-9].{4,10})$/, "아이디는 영문, 숫자로 가능합니다."),

  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      "정확한 이메일을 입력하세요."
    ),

  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 입니다."
    ),
});

export const schema_login = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      "정확한 이메일을 입력하세요."
    ),

  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 입니다."
    ),
});

export const schema_boards = yup.object({
  writer: yup.string().required("!작성자를 입력해주세요"),
  password: yup.string().required("!비밀번호를 입력해주세요"),
  title: yup.string().required("!제목을 입력해주세요"),
  contents: yup.string().required("!내용을 입력해주세요"),
  youtubeUrl: yup.string(),
});

export const schema_products = yup.object({
  remarks: yup.string().required("제목을 입력해주세요"),
  price: yup
    .number()
    .required("가격을 입력해주세요")
    .typeError("숫자만 입력해주세요"),
  contents: yup
    .string()
    .required("내용을 입력해주세요")
    .min(0, "내용을 입력해주세요"),
});

export const schema_comment = yup.object({
  contents: yup.string().required("내용을 입력해주세요"),
});
