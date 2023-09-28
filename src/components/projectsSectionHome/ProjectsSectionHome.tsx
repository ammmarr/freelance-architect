import ProjectCard from "../ProjectCards/ProjectForHome/ProjectCard";
import style from "./index.module.scss";

const ProjectsSectionHome = () => {
  return (
    <>
      <div className={style.projectsRow}>
        <ProjectCard />
        <ProjectCard />
      </div>{" "}
      <div className={style.projectsRow}>
        <ProjectCard />
        <ProjectCard />
      </div>{" "}
      <div className={style.projectsRow}>
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default ProjectsSectionHome;
