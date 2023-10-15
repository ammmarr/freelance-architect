import React from "react";
import style from "./index.module.scss";
import demo from "../../assets/sliderImg2.jpg";
import { useNavigate } from "react-router-dom";
const ProjectCardForProjectsPage = ({ data, number }: any) => {
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      onClick={() => navigate(`/project/${number}`)}
    >
      <img src={data.mainImg} />
      <div className={style.hoverText}>
        {" "}
        <h3>{data.name}</h3>
        <h4>{data.category}</h4>
      </div>
    </div>
  );
};

export default ProjectCardForProjectsPage;
