import Slider from "react-slick";
import style from "./index.module.scss";
import { useRef } from "react";
import { TrendingFlat } from "@mui/icons-material";
const QuotesCarousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  if (window.innerWidth < 630) {
    const clonedSettings = { ...settings, slidesToShow: 1 };
    settings = {
      ...clonedSettings,
    };
  }
  const sliderRef = useRef<Slider | null>(null);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <TrendingFlat
          className={`${style.iconContainer} ${style.transformLeft}`}
          style={{ color: "inherite" }}
          onClick={goToPrevSlide}
        />

        <TrendingFlat
          className={`${style.iconContainer} ${style.transformRight}`}
          onClick={goToNextSlide}
        />
        <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
          <div className={style.singleItemContainer}>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident facere harum voluptates numquam dolore repellat
              exercitationem, eveniet hic quod nesciunt facilis illo laboriosam
              sed dolorum nihil delectus autem eum molestiae.
            </h3>
            <p>ammar omaar</p>
          </div>
          <div className={style.singleItemContainer}>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident facere harum voluptates numquam dolore repellat
              exercitationem, eveniet hic quod nesciunt facilis illo laboriosam
              sed dolorum nihil delectus autem eum molestiae.
            </h3>
            <p>ammar omaar</p>
          </div>{" "}
          <div className={style.singleItemContainer}>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident facere harum voluptates numquam dolore repellat
              exercitationem, eveniet hic quod nesciunt facilis illo laboriosam
              sed dolorum nihil delectus autem eum molestiae.
            </h3>
            <p>ammar omaar</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default QuotesCarousel;
