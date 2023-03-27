import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  background-color: #fff;
  padding: 5rem;
  border-top: 1rem solid #ff6868;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 1.6rem;
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-auto-rows: 1fr;
  align-items: center;
  margin: 10px;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImgBox = styled.div`
  width: 92px;
  height: 92px;
  line-height: 90px;
  background-color: grey;
  position: relative;
  margin-right: 5px;
  background-color: #dfe1e4;
  text-align: center;
  font-size: 4rem;
  color: #fff;
`;

export const GetImg = styled.img`
  display: inline-block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.4rem;
  background: #dfe1e4;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 100%;
  background-color: #111;
  color: #fff;
  margin-bottom: 3px;
  margin-left: 3px;
  outline: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;
