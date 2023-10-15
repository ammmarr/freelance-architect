import Links from "../shared/links/Links";
import style from "./index.module.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h2>daksnfk KJS FKJS KLFNAkjd AS</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          deleniti quibusdam magnam! Amet sunt labore nobis soluta, quibusdam
          voluptas assumenda cumque, eaque blanditiis temporibus doloremque
          tenetur libero dignissimos, illum mollitia!
        </p>
        <Links />
      </div>
      <div className={style.middle}>
        <img src={logo} />
      </div>
      <div className={style.last}>
        <h2>Contact</h2>
        <span>A: Seestrasse 21, Zurich, Switzerland</span>
        <span>A: Seestrasse 21, Zurich, Switzerland</span>
        <span>A: Seestrasse 21, Zurich, Switzerland</span>
        <span>A: Seestrasse 21, Zurich, Switzerland</span>
        <span>A: Seestrasse 21, Zurich, Switzerland</span>
      </div>
    </div>
  );
};

export default Footer;
