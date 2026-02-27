import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -12 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

/**
 * Wrap every route element with `<PageWrapper>` to enable
 * smooth enter / exit page transitions via AnimatePresence.
 */
const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
