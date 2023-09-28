import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../../assets/sliderImg1.jpg";
import img2 from "../../assets/sliderImg2.jpg";
import img3 from "../../assets/sliderImg3.jpg";
import style from "./index.module.scss";
// interface HeroCardProps {
//   h1: string;
//   h2: string;
//   h3: string;
//   p: string;
//   bg: string;
// }
const HeroCard = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState("none");
  const heroSectionCardsData = [
    {
      h1: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Experience
        </motion.h1>
      ),
      h2: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Knowledge
        </motion.h1>
      ),
      h3: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Integrated
        </motion.h1>
      ),
      p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
      bg: img1,
    },
    {
      h1: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ExperiencdsaAe
        </motion.h1>
      ),
      h2: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Knowledge
        </motion.h1>
      ),
      h3: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Integrated
        </motion.h1>
      ),
      p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
      bg: img2,
    },
    {
      h1: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Experiencess
        </motion.h1>
      ),
      h2: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Knowledge
        </motion.h1>
      ),
      h3: (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Integrated
        </motion.h1>
      ),
      p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
      bg: img3,
    },
  ];

  // const heroSectionCardsData = [
  //   {
  //     h1: "Experience",
  //     h2: "& Knowledge",
  //     h3: "Integrated",
  //     p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
  //     bg: img1,
  //   },
  //   {
  //     h1: "Experience",
  //     h2: "& Knowledge",
  //     h3: "Integrated",
  //     p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
  //     bg: img2,
  //   },
  //   {
  //     h1: "Experience",
  //     h2: "& Knowledge",
  //     h3: "Integrated",
  //     p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
  //     bg: img3,
  //   },
  // ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev == heroSectionCardsData.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    setDisplay("block");

    // return () => {
    //   setDisplay("none");
    //   console.log(display, "elmafrood none");
    // };
  }, [heroSectionCardsData[counter]]);
  // useLayoutEffect(() => {
  //   setDisplay("block");
  // }, []);
  console.log(display);
  // let currentActivSlide = <HeroCard {...heroSectionCardsData[0]} />;

  // if (counter == 2) {
  //   currentActivSlide = <HeroCard {...heroSectionCardsData[1]} />;
  // }
  // if (counter == 3) {
  //   currentActivSlide = <HeroCard {...heroSectionCardsData[2]} />;
  // }
  const { h1, h2, h3, p, bg } = heroSectionCardsData[counter];
  return (
    <motion.div
      className={style.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src={bg} />
      <div className={style.textContainer}>
        <h1>{h1}</h1>
        <h1>{h2}</h1>
        <h1>{h3}</h1>
        <p>{p}</p>
      </div>
    </motion.div>
  );
};

export default HeroCard;
