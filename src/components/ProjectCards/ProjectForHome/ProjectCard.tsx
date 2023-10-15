import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import img from "../../../assets/sliderImg1.jpg";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({ data, number }: any) => {
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      onClick={() => navigate(`project/${number}`)}
    >
      <img src={data.mainImg} />
      <div className={style.textContainer}>
        <div className={style.textWrapper}>
          <h2>{data.name}</h2>
          <TrendingFlatIcon className={style.icon} color="inherit" />
        </div>
        <div className={style.number}>0{number + 1}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
