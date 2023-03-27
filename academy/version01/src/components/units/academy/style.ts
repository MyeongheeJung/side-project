import styled from "@emotion/styled";

export const Items = styled.div`
  min-width: 120px;
`;

export const LogoImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`;

export const CardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export const Card = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid #dfe1e4;
  border-radius: 4px;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Content = styled.div`
  width: calc(100%-80px);
  height: 100%;
  margin-left: 20px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

export const Name = styled.p`
  font-size: 1.8rem;
`;

export const Review = styled.button`
  border: none;
  background: none;
  background-color: #ff6868;
  padding: 4px 0;
  width: 90px;
  cursor: pointer;

  span {
    color: #fff;
  }
`;
