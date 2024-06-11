import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import AgentPropertyCard from "./AgentPropertyCard";
const AgentProperyList = ({ title }) => {
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useLocale();
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className="max-w-6xl mb-32 mx-auto text-center">
      <motion.div
        ref={ref}
        animate={{
          opacity: hasAnimated ? 1 : 0,
          y: hasAnimated ? 0 : 300,
        }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row gap-8 flex-wrap justify-evenly">
          <AgentPropertyCard image={"feature-1.jpg"} />
          <AgentPropertyCard image={"feature-2.jpg"} />
          <AgentPropertyCard image={"feature-3.jpg"} />
        </div>
      </motion.div>
    </div>
  );
};

export default AgentProperyList;
