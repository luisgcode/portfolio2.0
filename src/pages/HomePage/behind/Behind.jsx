import React from "react";
import { motion } from "framer-motion";
import "./behind.css";

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
              duration: 0.5,
              delay: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="w-full flex justify-center items-center my-6 gap-10 text-white"
      >
        <div className="custom-bullets ">
          2 <span className="text-base font-normal">Years of experience</span>
        </div>
        |
        <div className="custom-bullets">
          10+
          <span className="text-base font-normal">Tech Skills Mastered</span>
        </div>
        |
        <div className="custom-bullets">
          12000+ <span className="text-base font-normal  ">Hours Coding</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Behind;
