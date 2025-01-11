import React from "react";
import "./hero.css";
import { heroImage } from "../import_data";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero px-8 py-6 md:p-mid_pad">
      <div className="hero-container my-6 flex justify-between ">
        <div className="intro">
          <h1>Luis Guaiquirian</h1>
          <h2 className="text-highlightColor  ">Web Developer</h2>
          <p className="mt-1 mb-6 max-w-[35ch]">
            I build responsive Web applications with modern technologies,
            specializing in:
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
            <span className=" px-2 rounded-lg py-1 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300">
              React JS
            </span>
            <span className=" px-2 rounded-lg py-1 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 ">
              Tailwind CSS
            </span>{" "}
            <span className=" px-2 rounded-lg py-1 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-sm">
              JavaScript
            </span>{" "}
            <span className=" px-2 rounded-lg py-1 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs">
              Next JS
            </span>
            <span className=" px-2 rounded-lg py-1 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs">
              Python
            </span>
          </div>
          <div className="mt-6">
            <ul className="flex gap-6">
              <li>
                <a
                  className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
                  href="/portfolio2.0/cv_developer_luis.pdf"
                  download="luis_summary.pdf"
                >
                  <BsFileEarmarkPdf /> Résumé
                </a>
              </li>
              <li>
                <a
                  className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
                  href="https://www.linkedin.com/in/luisgcode/"
                  target="_blank"
                >
                  <FiLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a
                  className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
                  href="https://github.com/luisgcode"
                  target="_blank"
                >
                  <LuGithub /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:block image w-2/2 mr-20  ">
          <img className="w-[280px]" src={heroImage} alt="Luis Guaiquirian" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
