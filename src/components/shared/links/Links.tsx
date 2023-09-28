import style from "./index.module.scss";
const Links = () => {
  return (
    <div className={style.container}>
      <a>LI</a>
      <div className={style.divider} />
      <a>IG</a>
      <div className={style.divider} />
      <a>FB</a>
    </div>
  );
};

export default Links;
