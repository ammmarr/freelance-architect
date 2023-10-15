import projects from "../../projectsData";
import ProjectCardForProjectsPage from "../ProjectCardForProjectsPage/ProjectCardForProjectsPage";
import style from "./index.module.scss";
export const ProjectsHeroSection = () => {
  return (
    <div className={style.container}>
      <h1>LatestProjects</h1>
      <div className={style.projectsContainer}>
        {projects.map((each, i) => (
          <ProjectCardForProjectsPage data={each} key={i} number={i} />
        ))}
      </div>
    </div>
  );
};
