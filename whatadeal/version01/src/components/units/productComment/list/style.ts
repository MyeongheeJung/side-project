import styled from "@emotion/styled";

export const QuestionWrap = styled.div`
  display: grid;
  grid-template-columns: 70px 6fr 1fr;
  gap: 1rem;

  margin-top: 15px;
  height: 12rem;
  padding: 2rem;
  font-size: 14px;
  border: 1px solid #d9d9d9;
`;

export const UserBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const FlexBox = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const BtnAnswer = styled.div`
  width: 18px;
  height: 18px;
  font-size: 18px;
  text-align: center;
  color: #ddd;
  background-color: #000000;
  margin-right: 10px;
`;

export const BtnEdit = styled.div`
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
`;

export const BtnDelete = styled.div`
  width: 18px;
  height: 18px;
  display: inline-block;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const Comments = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
`;
