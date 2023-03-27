import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem 0;
  font-size: 1.6rem;
  /* border-top: 1px solid #ddd; */
`;

export const TopWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

export const CommentsStarsWrappper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StarRate = styled(Rate)``;

export const CommentsWrapp = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;

export const TextLength = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #bdbdbd;
  padding-left: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const TextRegisterBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 14px 16px;
  background: #000000;
  position: absolute;
  bottom: 0;
  right: 0;
`;
