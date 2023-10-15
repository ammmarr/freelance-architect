import demo from "../../assets/sliderImg1.jpg";
import style from "./index.module.scss";
const ProjectsCardForHeroSection = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={demo} />
      </div>
      <div className={style.bottomSection}>
        <div className={style.date}>
          <h6>3</h6>
          <div className={style.month}>May</div>
        </div>
        <h3> Project Name</h3>
      </div>
    </div>
  );
};

export default ProjectsCardForHeroSection;
