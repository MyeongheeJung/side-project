import { SubText, SubTitle, Title } from "../../../commons/styles/text";
import { FormImgWrap, FormPosition, FormWrap } from "./style";

interface IPropsType {
  imgUrl: string;
  text: string;
  children: JSX.Element;
}

const Form = (props: IPropsType) => {
  return (
    <FormImgWrap imgUrl={props.imgUrl}>
      <FormWrap>
        <Title mb="3rem">학원의 정석</Title>
        <FormPosition>{props.children}</FormPosition>
        <SubText size="1.4rem" mt="2rem">
          이 사이트는 실제 운영되는 사이트가 아닙니다.
          <br />© 2023 Myeonghee.Jung all rigths reserved.
        </SubText>
      </FormWrap>
    </FormImgWrap>
  );
};

export default Form;
