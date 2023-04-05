import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const ProductImage = styled.div`
  width: 50%;
  /* background-color: #eee; */
`;

export const ProductDetailContent = styled.div`
  width: 50%;
  height: 35rem;
  padding-left: 5rem;
  position: relative;
`;

export const ImagaBox = styled.div`
  width: 47px;
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
`;

export const Bottons = styled.div`
  width: calc(100% - 10px);
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  bottom: 0;
`;
