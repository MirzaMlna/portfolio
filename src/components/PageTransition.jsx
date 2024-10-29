import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 0.5,
};

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        style={{ width: "100vw", height: "100vh" }} // Sesuaikan dengan kebutuhan
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            padding: "10px",
            background: "rgba(0,0,0,0.5)",
            color: "white",
          }}
        ></div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageTransition;
