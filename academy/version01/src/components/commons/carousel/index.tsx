import { Item } from "./style";
import SlickCarousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
        <div>
          <img src="/carousel/02.png" />
        </div>
      </Item>
      <Item>
        <div>
          <img src="/carousel/03.png" />
        </div>
      </Item>
      <Item>
        <div>
          <img src="/carousel/04.png" />
        </div>
      </Item>
      <Item>
        <div>
          <img src="/carousel/05.png" />
        </div>
      </Item>
      <Item>
        <div>
          <img src="/carousel/06.png" />
        </div>
      </Item>
      <Item>
        <div>
          <img src="/carousel/07.png" />
        </div>
      </Item>
      <Item>
        <div>
          <img src="/carousel/08.png" />
        </div>
      </Item>
    </SlickCarousel>
  );
}
