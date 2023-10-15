import Footer from "../components/Footer/Footer";
import ProjectDetailsHeroSection from "../components/projectDetailsHeroSection/ProjectDetailsHeroSection";
import transition from "../transitions/PageTransitions";

const Project = () => {
  return (
    <div>
      <ProjectDetailsHeroSection />
      <Footer />
    </div>
  );
};

export default transition(Project);
