import React from "react";
import "./hero.css";
import { heroImage } from "../media";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero p-sma_pad  md:p-mid_pad  ">
      <motion.div
        variants={{
          hidden: { y: 80, opacity: 0 },
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
        className="hero-container my-6 flex justify-between      "
      >
        <div className="intro   ">
          <h1>Luis Guaiquirian</h1>
          <h2 className="text-highlightColor">Web Developer</h2>
          <p className="mt-1 mb-6 max-w-[35ch]">
            I build responsive Web applications with modern technologies,
            specializing in:
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
            <span className="custom-hero-tag ">React JS</span>
            <span className="custom-hero-tag ">Tailwind CSS</span>
            <span className="custom-hero-tag text-sm">JavaScript</span>
            <span className="custom-hero-tag text-xs">Next JS</span>
            <span className="custom-hero-tag text-xs">Python</span>
          </div>
          <div className="mt-6">
            <ul className="flex gap-6">
              <li>
                <a
                  className="hero-icon"
                  href="/portfolio2.0/cv_developer_luis.pdf"
                  download="luis_summary.pdf"
                >
                  <BsFileEarmarkPdf /> Résumé
                </a>
              </li>
              <li>
                <a
                  className="hero-icon"
                  href="https://www.linkedin.com/in/luisgcode/"
                  target="_blank"
                >
                  <FiLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a
                  className="hero-icon"
                  href="https://github.com/luisgcode"
                  target="_blank"
                >
                  <LuGithub /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex items-center  lg:mr-16  ">
          <img className="w-[280px] " src={heroImage} alt="Luis Guaiquirian" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
