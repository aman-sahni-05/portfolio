import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProgressBar = ({ skill, logo, progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // trigger only once

  return (
    <div className="w-full" ref={ref}>
      {/* Skill Name + Logo + Percentage */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <img src={logo} alt={skill} className="w-4 h-4" />
          <span className="font-medium text-xl md:text-2xl">{skill}</span>
        </div>
        {isInView && (
          <motion.span
            className="font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {progress}%
          </motion.span>
        )}
      </div>

      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
        <motion.div
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function TechnicalSkills({ skillName, logo, progress }) {
  return (
    <div className="">
      <ProgressBar skill={skillName} logo={logo} progress={progress} />
    </div>
  );
}
