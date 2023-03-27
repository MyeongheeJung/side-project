import styled from "@emotion/styled";

export const FormImgWrap = styled.div`
  background-image: ${(props: { imgUrl: string }) =>
    props.imgUrl !== "" && `url(${props.imgUrl})`};
  background-size: cover;
  /* background-color: #f8f8f8; */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -2;

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
