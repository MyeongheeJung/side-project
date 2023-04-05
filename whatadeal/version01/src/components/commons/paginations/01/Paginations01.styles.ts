import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}

export const Btn = styled.button`
  color: #dfe1e4;
  background-color: #fff;
  border: 1px solid #dfe1e4;
  border-radius: 4px;
  line-height: 2rem;
  text-align: center;
`;

export const LeftBtn = styled(Btn)`
  color: ${(props: IPageProps) => (props.isActive ? "#fff" : "black")};
  background: ${(props: IPageProps) => (props.isActive ? "#ff6868" : "#fff")};
  border: ${(props: IPageProps) =>
    props.isActive ? "none" : " 1px solid #dfe1e4"};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const RigthBtn = styled(LeftBtn)``;

export const Page = styled(LeftBtn)`
  width: 3rem;
`;
