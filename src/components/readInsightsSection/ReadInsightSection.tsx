import TrendingFlat from "@mui/icons-material/TrendingFlat";
import ProjectsCardForHeroSection from "../projectCardHeroSection/ProjectsCardForHeroSection";
import style from "./index.module.scss";
import { useRef, useState } from "react";
import Slider from "react-slick";
const ReadInsightSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const sliderRef = useRef<Slider | null>(null);

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
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2>read insights</h2>
        <div className={style.pAndButtonsCotainer}>
          <p> sknafkjandfj akjldsf kjlas sa dkljadf lajk</p>
          <div className={style.buttonsContainer}>
            <TrendingFlat
              className={`${style.iconContainer} ${style.transformLeft}`}
              style={{ color: "inherite" }}
              onClick={goToPrevSlide}
            />

            <TrendingFlat
              className={`${style.iconContainer} ${style.transformRight}`}
              onClick={goToNextSlide}
            />
          </div>
        </div>

        <div className={style.projectsSlider}>
          <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
            <ProjectsCardForHeroSection />
            <ProjectsCardForHeroSection />
            <ProjectsCardForHeroSection />
            <ProjectsCardForHeroSection />
            <ProjectsCardForHeroSection />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReadInsightSection;
