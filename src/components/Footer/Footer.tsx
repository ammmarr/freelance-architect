import Links from "../shared/links/Links";
import style from "./index.module.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h2>RECOGNIZING THE NEED IS THE PRIMARY CONDITION</h2>
        <p>
          In the world of architectural design, creativity is the compass
          guiding us to innovate. Each blueprint is a canvas awaiting
          inspiration, turning bricks into poetry. Architects are storytellers,
          crafting structures that inspire and stand as timeless monuments to
          human achievement.
        </p>
        <Links />
      </div>
      {/* <div className={style.middle}>
        <img src={logo} />
      </div> */}
      <div className={style.last}>
        <div className={style.textContainerToAlignItemsStart}>
          <h2>Contact</h2>
          <span>Number: 01551009049</span>
          <span>Whatsapp: 01034432412</span>
          <span>Email: mostafa1996uyd@gamil.com</span>
          <span>Location: Egypt Ismailia Sheikh Zayed</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
