import styled from "@emotion/styled";

export const FormImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;
    opacity: 0.5;
  }
`;

export const FormWrap = styled.div`
  z-index: 1;
  text-align: center;
`;

export const FormPosition = styled.div`
  background-color: #fff;
  padding: 5rem 5rem 3rem;
  text-align: center;
`;
