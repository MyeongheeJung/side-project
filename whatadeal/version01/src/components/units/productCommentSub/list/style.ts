import styled from "@emotion/styled";

export const ArrowImgBox = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
`;

export const CommentWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70px 6fr 1fr;
  gap: 1rem;

  margin-top: 15px;
  padding: 2rem;
  border: 1px solid #d9d9d9;
`;

export const UserBox = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
