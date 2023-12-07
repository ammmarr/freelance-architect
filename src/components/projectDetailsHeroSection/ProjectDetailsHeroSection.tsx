import projects from "../../projectsData";
import style from "./index.module.scss";
const ProjectDetailsHeroSection = ({ data }: any) => {
  const projectImages = data.project_images
    ? data.project_images.data?.project_images?.data.map(
        (each: any, i: number) => <img src={`${each.attributes.url}`} key={i} />
      )
    : null;
  const projectVideos = data.project_videos
    ? data.project_videos.data.map((each: any) => (
        <video
          src={`${each.attributes.url}`}
          autoPlay
          width={"100%"}
          height={"100%"}
          controls
          preload="metadata"
        />
      ))
    : null;
  return (
    <div className={style.container}>
      <h1>Project - "{data.name}"</h1>
      <div className={style.imagesContainer}>
        {projectVideos && projectVideos}
        {/* {projectImages && projectImages} */}
      </div>

      <div className={style.textContainer}>
        <div className={style.description}>
          <h3>{data.title} </h3>
          <p>{data.description}</p>
        </div>
        <div className={style.info}>
          <h6>
            <span>ARCHITECTS :</span>
            {data.architects}
          </h6>
          <h6>
            <span>LOCATION : </span>
            {data.location}
          </h6>
          <h6>
            <span>CATEGORY : </span>
            {data.category}
          </h6>

          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeroSection;
