import { Item } from "./style";
import SlickCarousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

export default function Carousel() {
  return (
    <SlickCarousel {...settings}>
      <Item>
        <div>
          <img src="/carousel/01.png" />
        </div>
      </Item>
      <Item>
        <div style={{ background: "rgb(63, 74, 195)" }}>
          <img src="/carousel/02.png" />
        </div>
      </Item>
      <Item>
        <div style={{ background: "rgb(0, 178, 161)" }}>
          <img src="/carousel/03.png" />
        </div>
      </Item>
    </SlickCarousel>
  );
}
