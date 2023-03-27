import styled from "@emotion/styled";

export const HomeWrap = styled.div``;

export const Img = styled.div`
  height: 300px;
  text-align: center;

  img {
    height: 100%;
    width: auto;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 78px;
  line-height: 74px;
  border-radius: 39px;
  background-color: #fff;
  border: 2px solid #ffce49;
  padding: 0 40px 0 32px;
  font-size: 22px;
  box-sizing: content-box;
  position: relative;
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  h1 {
    color: #f8f8f8;
    font-size: 2rem;
    text-align: center;
    line-height: 1.5;
  }

  span {
    color: #fe2943;
  }
`;
