import Footer from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/NavBar";
import { ProjectsHeroSection } from "../components/projectsHeroSection/ProjectsHeroSection";
import transition from "../transitions/PageTransitions";

const Projects = () => {
  return (
    <>
      <NavBar />
      <ProjectsHeroSection />
      <Footer />
    </>
  );
};

export default transition(Projects);
