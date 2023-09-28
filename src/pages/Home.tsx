import CeoSection from "../components/ceoSection/CeoSection";
import HeroCard from "../components/heroCard/HeroCard";
import ProjectsSectionHome from "../components/projectsSectionHome/ProjectsSectionHome";
import StartWithIdeaSection from "../components/startWithIdeaSection/StartWithIdeaSection";

const Home = () => {
  return (
    <div className="container">
      <HeroCard />
      <ProjectsSectionHome />
      <StartWithIdeaSection />
      <CeoSection />
    </div>
  );
};

export default Home;
