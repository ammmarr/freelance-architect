import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NavBar } from "./components/Navbar/NavBar";
import routes from "./routes";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <NavBar />

        <Routes location={location} key={location.pathname}>
          {routes.map((each, i) => (
            <>
              <Route path={each.href} key={i} element={each.element} />
            </>
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
