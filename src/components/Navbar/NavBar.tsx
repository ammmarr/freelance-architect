import style from "./index.module.scss";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const blurred = lastScrollY > 250 ? style.blurred : style.none;
  return (
    <nav
      className={
        show
          ? `${style.mainNavShow} ${style.container}`
          : `${style.mainNavHide} ${blurred}`
      }
    >
      <div className={style.logoContainer}>
        <img src={logo} alt="" />
      </div>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};
