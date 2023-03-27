import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 2fr;
  gap: 1rem;
`;

export const CardWrap = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid #dfe1e4;
  border-radius: 4px;

  &:hover {
    background-color: #999;
    color: #333;
  }
`;

export const TextBox = styled.div`
  padding: 2rem;
`;

export const ImageBox = styled.div`
  border-radius: 4px 4px 0 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const StarBox = styled.div`
  font-size: 1.4rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`;
