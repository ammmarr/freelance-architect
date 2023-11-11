import style from "./index.module.scss";
import leftImg from "../../assets/subBG.jpeg";
import ProfileCard from "../profileCard/ProfileCard";
const CeoSection = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={leftImg} />
      </div>
      <div className={style.right}>
        <ProfileCard />
      </div>
    </div>
  );
};

export default CeoSection;
