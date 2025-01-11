import React from "react";
import { motion } from "framer-motion";

const Behind = () => {
  return (
    <div className="behind text-center mt-20 overflow-y-hidden hidden md:flex px-8">
      <motion.div
        variants={{
          hidden: { y: 80 },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="w-full flex justify-center items-center my-6 gap-10 text-white"
      >
        <div className="bullet text-4xl font-bold flex items-center gap-4 selection:bg-highlightColor">
          3 <span className="text-base font-normal">Years of experience</span>
        </div>
        |
        <div className="bullet text-4xl font-bold flex items-center gap-4 selection:bg-highlightColor">
          10+
          <span className="text-base font-normal">Tech Skills Mastered</span>
        </div>
        |
        <div className="bullet text-4xl font-bold flex items-center gap-4 selection:bg-highlightColor">
          12000+ <span className="text-base font-normal  ">Hours Coding</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Behind;
