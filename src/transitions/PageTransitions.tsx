import { motion } from "framer-motion";
import style from "./index.module.scss";
const transition = (Comp: React.FC) => {
  return () => (
    <>
      <motion.div
        className={style.slideIn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Comp />
      </motion.div>
    </>
  );
};

export default transition;
