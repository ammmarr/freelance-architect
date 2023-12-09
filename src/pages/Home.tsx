import Footer from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/NavBar";
import AccordionSection from "../components/accordionSection/AccordionSection";
import CeoSection from "../components/ceoSection/CeoSection";
import ContactSection from "../components/contactSectionForm/contactSection";
import HeroCard from "../components/heroCard/HeroCard";
import ProjectsSectionHome from "../components/projectsSectionHome/ProjectsSectionHome";
import QuotesCarousel from "../components/quotesCarousel/QuotesCarousel";
import ReadInsightSection from "../components/readInsightsSection/ReadInsightSection";
import StartWithIdeaSection from "../components/startWithIdeaSection/StartWithIdeaSection";
import useGetData from "../hooks/useGetData";
import transition from "../transitions/PageTransitions";

const Home = () => {
  const { data, loading, error } = useGetData(
    `${import.meta.env.VITE_DOMAIN}/api/projects?populate=*`
  );
  return (
    <div>
      <NavBar />
      <HeroCard />
      <ProjectsSectionHome data={data} />
      <StartWithIdeaSection />
      <CeoSection />
      <AccordionSection />
      <ReadInsightSection data={data} />
      <QuotesCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default transition(Home);
