import React from "react";
import { portfolioVideo, portfolioPoster } from "../import_data";
import { FaCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects px-8 py-6 md:p-mid_pad ">
      <h3 className="heading-tertiary">
        My Latest Projects.
        <span className="brush"></span>
      </h3>
      <div className="flex flex-wrap   md:justify-center gap-y-16 gap-x-10 projects-container mt-12  lg:justify-between">
        {/* 1 */}
        <div className="project-card   ">
          {/* title */}
          <h4 className="font-bold mb-4">luisgcode.com (v2)</h4> {/* Info */}
          <div>
            <p>
              New Portfolio 2025 created with React JS mainly. Lorem ipsum dolor
              sit amet consectetur adipisicing
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                React JS
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                Tailwind CSS
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                Framer Motion
              </span>
            </div>
          </div>
          {/* video */}
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
        </div>
        {/* 2 */}
        <div className="project-card  ">
          {/* title */}
          <h4 className="font-bold mb-4">Canjet Dashboard</h4> {/* Info */}
          <div>
            <p>
              Component for measuring the occupancy of a location, designed to
              connect to an API for real-time crowd data.{" "}
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                Chart JS
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                JavaScript
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                CSS
              </span>
            </div>
          </div>
          {/* video */}
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
        </div>
        {/* 3 */}
        <div className="project-card  ">
          {/* title */}
          <h4 className="font-bold mb-4">luisgcode.com(v1)</h4> {/* Info */}
          <div>
            <p>
              Create a User Pattern Library for CanJet company; Grid Layout,
              Colors, and Fonts
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                Sass
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                HTML
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                CSS
              </span>
            </div>
          </div>
          {/* video */}
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
        </div>{" "}
        {/* 4 */}
        <div className="project-card  ">
          {/* title */}
          <h4 className="font-bold mb-4">luisgcode.com(v1)</h4> {/* Info */}
          <div>
            <p>
              Optimize website: fix errors, improve functionality, translate to
              Spanish.{" "}
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                Sass
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                HTML
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs md:text-base">
                CSS
              </span>
            </div>
          </div>
          {/* video */}
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Projects;
