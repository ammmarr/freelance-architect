<<<<<<< HEAD
import ProjectCardForProjectsPage from "../ProjectCardForProjectsPage/ProjectCardForProjectsPage";
import style from "./index.module.scss";
export const ProjectsHeroSection = ({ data }: any) => {
  return (
    <div className={style.container}>
      <h1>Latest Projects</h1>
      <div className={style.projectsContainer}>
      {data.map((each: any, i: any) => (
          <ProjectCardForProjectsPage data={each} key={i} number={each.id} />
        ))}
      </div>
    </div>
  );
};
=======
import ProjectCardForProjectsPage from "../ProjectCardForProjectsPage/ProjectCardForProjectsPage";
import style from "./index.module.scss";
export const ProjectsHeroSection = ({ data }: any) => {
  return (
    <div className={style.container}>
      <h1>Latest Projects</h1>
      <div className={style.projectsContainer}>
      {data.map((each: any, i: any) => (
          <ProjectCardForProjectsPage data={each} key={i} number={each.id} />
        ))}
      </div>
    </div>
  );
};
>>>>>>> 635c99df0f169210380009f5e9dab4fec5145a43
