import style from "./index.module.scss";
import leftImg from "../../assets/subBG.jpeg";
import ProfileCard from "../profileCard/ProfileCard";
import useGetData from "../../hooks/useGetData";
const CeoSection = () => {
  const { data, loading, error } = useGetData(
    `${import.meta.env.VITE_DOMAIN}/api/main-info?populate=*`
  );
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
