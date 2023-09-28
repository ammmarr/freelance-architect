import { AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Home />
      </AnimatePresence>
    </>
  );
}

export default App;
