import Footer from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/NavBar";
import { ProjectsHeroSection } from "../components/projectsHeroSection/ProjectsHeroSection";
import ProjectsHeroSectionSkeleton from "../components/projectsHeroSectionSkeleton/ProjectsHeroSectionSkeleton";
import useGetData from "../hooks/useGetData";
import transition from "../transitions/PageTransitions";

const Projects = () => {
  const { data, loading, error } = useGetData(
    `${import.meta.env.VITE_DOMAIN}/api/projects?populate=*`
  );
  return (
    <>
      <NavBar />
      {data ? (
        <ProjectsHeroSection key={data.id} data={data} />
      ) : (
        <ProjectsHeroSectionSkeleton />
      )}

      <Footer />
    </>
  );
};

export default transition(Projects);
