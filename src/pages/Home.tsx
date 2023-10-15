import Footer from "../components/Footer/Footer";
import AccordionSection from "../components/accordionSection/AccordionSection";
import CeoSection from "../components/ceoSection/CeoSection";
import ContactSection from "../components/contactSectionForm/contactSection";
import HeroCard from "../components/heroCard/HeroCard";
import ProjectsSectionHome from "../components/projectsSectionHome/ProjectsSectionHome";
import QuotesCarousel from "../components/quotesCarousel/QuotesCarousel";
import ReadInsightSection from "../components/readInsightsSection/ReadInsightSection";
import StartWithIdeaSection from "../components/startWithIdeaSection/StartWithIdeaSection";
import transition from "../transitions/PageTransitions";

const Home = () => {
  return (
    <div className="container">
      {" "}
      <HeroCard />
      <ProjectsSectionHome />
      <StartWithIdeaSection />
      <CeoSection />
      <AccordionSection />
      <ReadInsightSection />
      <QuotesCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default transition(Home);
