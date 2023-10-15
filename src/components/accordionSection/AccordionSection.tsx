import Accordion from "./accordion/Accordion";
import style from "./index.module.scss";
const AccordionSection = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.leftContainer}>
          <h1>ARRAY OF SERVICES AND SKILLS</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur cepteur sint occaecat.
          </p>
        </div>
        <div className={style.rightContainer}>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
