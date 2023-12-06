import demo from "../../assets/sliderImg1.jpg";
import getDateInCostumeFormat from "../../utils/getDateInCustomFormat";
import style from "./index.module.scss";
const ProjectsCardForHeroSection = ({ data }: any) => {
  const name = data.attributes.name;
  const image = `${import.meta.env.VITE_DOMAIN}${
    data.attributes.main_thumbnail_image.data.attributes.url
  }`;
  const { month, day } = getDateInCostumeFormat(
    data.attributes.time_of_completion
  );
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={image} />
      </div>
      <div className={style.bottomSection}>
        <div className={style.date}>
          <h6>{day}</h6>
          <div className={style.month}>{month}</div>
        </div>
        <h3> {name}</h3>
      </div>
    </div>
  );
};

export default ProjectsCardForHeroSection;
