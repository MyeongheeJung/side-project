import { Img, ImgBox, SliderWrap, Wrap } from "./styles";
import Settings from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider({ data }: any) {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrap>
      <Wrap {...settings}>
        {data?.fetchUseditem?.images.map((el) => (
          <ImgBox>
            <Img src={`https://storage.googleapis.com/${el}`} />
          </ImgBox>
        ))}
      </Wrap>
    </SliderWrap>
  );
}
