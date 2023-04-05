import styled from "@emotion/styled";
import Settings from "react-slick";

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
`;

export const ImgBox = styled.div`
  flex: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const SliderWrap = styled.div`
  width: 100%;
  height: auto;
`;

export const Wrap = styled(Settings)`
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    z-index: 1;
  }

  .slick-next {
    right: 5px;
  }

  .slick-prev {
    left: 5px;
  }

  .slick-dots {
    bottom: 5px;
  }

  .slick-dots li button:before {
    color: #fff;
  }
`;
