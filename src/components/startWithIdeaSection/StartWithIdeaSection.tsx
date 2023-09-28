import style from "./index.module.scss";
import stairs from "../../assets/stairs.png";
import Button from "../shared/Button/Button";
const StartWithIdeaSection = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <div className={style.textWrapper}>
          <h2>START WITH IDEA</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non provident sunt in culpa qui officia deserunt. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
          <Button />
        </div>
      </div>
      <div className={style.imgContainer}>
        <img src={stairs} />
      </div>
    </div>
  );
};

export default StartWithIdeaSection;
