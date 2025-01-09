import React from "react";
import "./hero.css";
import { heroImage } from "../import_data";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero sec-pad">
      <div className="hero-container flex items-center justify-between my-10  ">
        <div className="intro ">
          <h1>Luis Guaiquirian</h1>
          <h2 className="text-highlightColor">Web Developer</h2>
          <p className="mt-2 mb-10">
            I build responsive Web applications with modern technologies, <br />
            specializing in:
          </p>
          {/* Learning */}
          <div className="flex flex-wrap items-center gap-10">
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor">
              React JS
            </span>
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor">
              Tailwind CSS
            </span>
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor">
              JavaScript
            </span>
            <span className=" px-4 rounded-lg py-2 bg-highlightColor bg-opacity-30 border border-highlightColor">
              Python
            </span>
          </div>
          <div className="mt-10">
            <ul className="flex gap-10">
              <li>
                <a className="flex gap-4" href="#">
                  <FiLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a className="flex gap-4" href="#">
                  <LuGithub /> Github
                </a>
              </li>
              <li>
                <a className="flex gap-4" href="#">
                  <MdOutlineEmail /> Email
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
