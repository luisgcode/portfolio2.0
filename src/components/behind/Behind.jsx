import React from "react";
import { motion } from "framer-motion";

const Behind = () => {
  return (
    <div className="behind text-center mt-20   overflow-y-hidden  ">
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
        className="w-full flex  justify-center items-center my-10 gap-20 text-white"
      >
        <div className="bullet text-6xl font-bold flex items-center gap-4 selection:bg-highlightColor">
          3 <span className="text-2xl font-normal">Years of experience</span>
        </div>
        |
        <div className="bullet text-6xl font-bold flex items-center gap-4 selection:bg-highlightColor">
          10+ <span className="text-2xl font-normal">Tech Skills Mastered</span>
        </div>
        |
        <div className="bullet text-6xl font-bold flex items-center gap-4 selection:bg-highlightColor">
          5000+ <span className="text-2xl font-normal  ">Hours Coding</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Behind;
