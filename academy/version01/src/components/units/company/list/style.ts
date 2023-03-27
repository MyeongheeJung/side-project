import styled from "@emotion/styled";

export const BoardTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid wheat;
  margin-bottom: 10px;
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
`;

export const CardWrap = styled.div`
  font-size: 15px;
  color: #555;
  border-radius: 20px;
  box-shadow: 1px 1px 5px -2px #000000;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 15px;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  /* margin-bottom: 7px; */
`;
export const Email = styled.div`
  font-size: 14px;
`;
export const Phone = styled.div`
  font-size: 14px;
`;

export const Star5 = styled.div`
  font-size: 15px;
  margin-top: 7px;
  color: #ffce49;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const Button = styled.button`
  width: 151px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 15px;
  border-radius: 15px;
  display: flex-wrap;

  cursor: pointer;
  border: none;
  transition: background 0.5 ease-in-out;

  :hover {
    background: rgb(235, 0, 0);
  }
`;
