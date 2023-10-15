import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NavBar } from "./components/Navbar/NavBar";
import routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <NavBar />

          <Routes>
            {routes.map((each, i) => (
              <Route path={each.href} key={i} element={each.element} />
            ))}
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
