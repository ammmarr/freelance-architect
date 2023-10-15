import projects from "../../projectsData";
import style from "./index.module.scss";
const ProjectDetailsHeroSection = () => {
  return (
    <div className={style.container}>
      <h1>Project - "Project Name"</h1>
      <div className={style.imagesContainer}>
        {projects[0].images.map((each: any) =>
          typeof each === "string" ? <img src={each} /> : each
        )}
      </div>
      <div className={style.textContainer}>
        <div className={style.description}>
          <h3>Title sakdklas dlksa dlkas </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            minima! Libero, atque dolorem in nulla laudantium tempora eum
            nesciunt nisi recusandae excepturi eaque aut enim molestias
            pariatur, est laboriosam obcaecati?
          </p>
        </div>
        <div className={style.info}>
          <h6>
            <span>ARCHITECTS :</span>
            skndslkad as d
          </h6>
          <h6>
            <span>LOCATION : </span>
            ismailias
          </h6>
          <h6>
            <span>CATEGORY : </span>
            sdnsakdk
          </h6>

          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeroSection;
