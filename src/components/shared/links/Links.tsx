import { socials } from "../../../data/mainData";
import style from "./index.module.scss";
const Links = () => {
  const linkedIn = socials.linkedin;
  const facebook = socials.facebook;
  const instagram = socials.instagram;
  return (
    <div className={style.container}>
      {linkedIn && (
        <>
          <a href={linkedIn} target="_blank">
            LI
          </a>
          <div className={style.divider} />
        </>
      )}
      {instagram && (
        <a href={instagram} target="_blank">
          IG
        </a>
      )}

      <div className={style.divider} />
      {facebook && (
        <a href={facebook} target="_blank">
          FB
        </a>
      )}
    </div>
  );
};

export default Links;
