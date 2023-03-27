import styled from "@emotion/styled";

export const FlexWrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
  position: relative;
  width: 100%;
  padding: 2rem 0 1.5rem 0;
`;

export const AvatarBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #ddd;
  margin-right: 1rem;
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  margin-left: 1rem;
`;

export const ContentsBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 3rem;
`;

export const UtilWrap = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 1.8rem;
  color: #bdbdbd;
`;

export const ModalInput = styled.input`
  outline: none;
  border: 1px solid #ddd;
  padding: 5px;
`;
