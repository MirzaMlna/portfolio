import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HoverScaleMinWrapper = ({ children }) => {
  return (
    <motion.div transition={{ duration: 0.5 }} whileHover={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

HoverScaleMinWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HoverScaleMinWrapper;
