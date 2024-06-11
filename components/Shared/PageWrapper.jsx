import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
