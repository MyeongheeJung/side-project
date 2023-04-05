import styled from "@emotion/styled";

// NewItem
export const GridItem5 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
`;

export const ItemBox = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  position: relative;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 4px;
`;

// BestItem
export const GridItem3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ItemContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 16px 16px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 64.06%,
    rgba(0, 0, 0, 0) 100%
  );
  color: rgb(255, 255, 255);
`;
