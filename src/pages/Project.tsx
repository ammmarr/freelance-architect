import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ProjectDetailsHeroSection from "../components/projectDetailsHeroSection/ProjectDetailsHeroSection";
import useGetData from "../hooks/useGetData";
import transition from "../transitions/PageTransitions";

const Project = () => {
  const params = useParams();
  const { data, loading, error } = useGetData(
    `${import.meta.env.VITE_DOMAIN}/api/projects/${params.id}?populate=*`
  );
  return (
    <div>
      {!!data && <ProjectDetailsHeroSection data={data.attributes} />}
      <Footer />
    </div>
  );
};

export default transition(Project);
