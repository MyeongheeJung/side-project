import styled from "@emotion/styled";

interface IPropsType {
  mb?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  size?: string;
}

export const Title = styled.h1`
  color: inherit;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${(props: IPropsType) => (props.mb ? props.mb : 0)};
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-top: ${(props: IPropsType) => (props.mt ? props.mt : 0)};
  margin-bottom: ${(props: IPropsType) => (props.mb ? props.mb : 0)};
`;

export const SubText = styled.p`
  font-size: ${(props: IPropsType) => (props.size ? props.size : "1.6rem")};
  margin-top: ${(props: IPropsType) => (props.mt ? props.mt : 0)};
  margin-bottom: ${(props: IPropsType) => (props.mb ? props.mb : 0)};
  margin-right: ${(props: IPropsType) => (props.mr ? props.mr : 0)};
  margin-left: ${(props: IPropsType) => (props.ml ? props.ml : 0)};
  line-height: 1.2;
  color: inherit;
`;

export const SubText_Bold = styled(SubText)`
  font-weight: 600;
  color: inherit;
`;

export const SubText_Grey = styled(SubText)`
  color: #8f8987;
`;
