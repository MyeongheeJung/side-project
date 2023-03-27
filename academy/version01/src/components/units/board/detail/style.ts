import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 20px 0 15px 0;
`;

export const AvatarBox = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  margin-right: 5px;
`;

export const UtilBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px 0 30px 0;
`;

export const Image = styled.div`
  margin-bottom: 1rem;

  img {
    display: inline-block;
    width: 100%;
    height: auto;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  height: 500px;
`;

export const ThumbWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #111;
  color: #000;
  cursor: pointer;

  &:hover {
    background: #ff6868;
    border: none;
    color: #fff;
  }
`;

export const ThumbUpCount = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: inherit;
`;

export const BtnWrap = styled.div`
  margin: 8rem 0 0 0;
  text-align: center;
`;
