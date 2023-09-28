import profileImg from "../../assets/owner.jpg";
import Links from "../shared/links/Links";
import style from "./index.module.scss";
const ProfileCard = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={profileImg} />
      </div>
      <h2>Mostafa Nasser</h2>
      <h3>CEO / Architect</h3>
      <Links />
    </div>
  );
};

export default ProfileCard;
