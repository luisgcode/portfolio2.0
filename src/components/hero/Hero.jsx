import React from "react";
import "./hero.css";
import { heroImage } from "../import_data";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero sec-pad">
      <div className="hero-container flex items-center justify-between my-10  ">
        <div className="intro ">
          <h1>Luis Guaiquirian</h1>
          <h2 className="text-highlightColor  ">Web Developer</h2>
          <p className="mt-2 mb-10">
            I build responsive Web applications with modern technologies, <br />
            specializing in:
          </p>

          <div className="flex flex-wrap items-center gap-10">
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 cursor-pointer transition-all duration-300">
              React JS
            </span>
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 cursor-pointer transition-all duration-300 ">
              Tailwind CSS
            </span>{" "}
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 cursor-pointer transition-all duration-300 text-[14px]">
              JavaScript
            </span>
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 cursor-pointer transition-all duration-300 text-[10px]">
              Python
            </span>
          </div>
          <div className="mt-10">
            <ul className="flex gap-10">
              <li>
                <a
                  className="flex gap-3 text-4xl"
                  href="/portfolio2.0/cv_developer_luis.pdf"
                  download="luis_summary.pdf"
                >
                  <BsFileEarmarkPdf /> Résumé
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 text-4xl"
                  href="https://www.linkedin.com/in/luisgcode/"
                  target="_blank"
                >
                  <FiLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 text-4xl"
                  href="https://github.com/luisgcode"
                  target="_blank"
                >
                  <LuGithub /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image w-2/2 mr-32 ">
          <img className="w-[280px]" src={heroImage} alt="Luis Guaiquirian" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
