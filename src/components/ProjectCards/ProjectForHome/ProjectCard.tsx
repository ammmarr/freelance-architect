import style from "./index.module.scss";
import img from "../../../assets/sliderImg1.jpg";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
const ProjectCard = () => {
  return (
    <div className={style.container}>
      <img src={img} />
      <div className={style.textContainer}>
        <div className={style.textWrapper}>
          <h2>name</h2>
          <TrendingFlatIcon className={style.icon} color="inherit" />
        </div>
        <div className={style.number}>01</div>
      </div>
    </div>
  );
};

export default ProjectCard;
