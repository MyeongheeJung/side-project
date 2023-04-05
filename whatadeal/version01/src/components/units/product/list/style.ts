import styled from "@emotion/styled";

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 2rem;
`;

export const ItemBox = styled.div`
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 6rem;
`;
