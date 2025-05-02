import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CircularProgress = ({ skillName, progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center w-38 h-38 space-y-2" ref={ref}>
      <div className="relative w-28 h-28 md:w-36 md:h-36">
        <svg
          className="w-[100] md:w-[150] h-[100] md:h-[150]"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="transparent"
            stroke="#ddd"
            strokeWidth="20"
          />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="transparent"
            stroke="#2563EB"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            transform="rotate(-90 100 100)"
            animate={{ strokeDashoffset: isInView ? offset : circumference }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        </svg>
        {isInView && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-semibold">
            {progress}%
          </div>
        )}
      </div>
      <p className="text-lg md:text-xl font-semibold text-center w-full">
        {skillName}
      </p>
    </div>
  );
};

export default function ProfessionalSkills({ skillName, progress }) {
  return (
    <div>
      <CircularProgress skillName={skillName} progress={progress} />
    </div>
  );
}
