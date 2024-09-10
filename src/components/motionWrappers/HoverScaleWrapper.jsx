import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HoverScaleWrapper = ({ children }) => {
  return (
    <motion.div transition={{ duration: 0.5 }} whileHover={{ scale: 1.2 }}>
      {children}
    </motion.div>
  );
};

HoverScaleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HoverScaleWrapper;
