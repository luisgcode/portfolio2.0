import React from "react";
import {
  posterPortfolio2,
  posterPortfolio1,
  posterCrowdMeter,
  posterGlobal,
} from "../import_data";
import { FaCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import "./projects.css";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="projects px-8 py-6 md:p-mid_pad ">
      <h3 className="heading-tertiary">
        My Latest Projects.
        <span className="brush"></span>
      </h3>
      <div className="flex flex-wrap md:justify-center gap-y-16 gap-x-10 projects-container mt-12  lg:justify-between  ">
        {/* 1 */}
        <div className="project-card ">
          {/* title */}
          <h4 className="font-bold mb-4 flex">
            luisgcode.com (v2) <FiArrowUpRight />
          </h4>
          {/* Info */}
          <div>
            <p>
              New Portfolio designed and developed to showcase the tools and
              technologies I’ve mastered over the past year, including React,
              and Tailwind CSS, in a modern, mobile-first design.
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3  ">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs  ">
                React JS
              </span>
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs  ">
                Tailwind CSS
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs  ">
                Framer Motion
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs  ">
                Responsive
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs  ">
                Bilingual
              </span>
            </div>
          </div>
          {/* Pictures */}
          <div className="pictures ">
            <img className="rounded-lg  " src={posterPortfolio2} alt="poster" />
          </div>
        </div>
        {/* 2 */}
        <div className="project-card ">
          {/* title */}
          <h4 className="font-bold mb-4 flex">
            Global Tech <FiArrowUpRight />
          </h4>
          {/* Info */}
          <div>
            <p>
              The client requested to optimize their website, fix existing
              errors, improve overall functionality, and translate the content
              into Spanish. Project approached by enhancing site performance.
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3 ">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                TypeScript
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                JavaScript
              </span>
            </div>
          </div>
          {/* Pictures */}
          <div className="pictures ">
            <img className="rounded-lg  " src={posterGlobal} alt="poster" />
          </div>
        </div>
        {/* 3 */}
        <div className="project-card ">
          {/* title */}
          <h4 className="font-bold mb-4 flex">
            Occupancy System <FiArrowUpRight />
          </h4>
          {/* Info */}
          <div>
            <p>
              Component for measuring the occupancy of a business, designed to
              connect to an API for real-time crowd data.
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3 ">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                React JS
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                Tailwind CSS
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                Framer Motion
              </span>
            </div>
          </div>
          {/* Pictures */}
          <div className="pictures ">
            <img
              className="rounded-lg   "
              src={posterCrowdMeter}
              alt="poster"
            />
          </div>
        </div>
        {/* 4  */}
        <div className="project-card ">
          {/* title */}
          <h4 className="font-bold mb-4 flex">
            luisgcode.com (v2) <FiArrowUpRight />
          </h4>{" "}
          {/* Info */}
          <div>
            <p>
              New Portfolio 2025 created with React JS mainly. Lorem ipsum dolor
              sit amet consectetur adipisicing
            </p>
          </div>
          {/* tags */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3 ">
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                React JS
              </span>{" "}
              <span className=" py-1 px-2 rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                Tailwind CSS
              </span>
              <span className=" py-1 px-2  rounded-lg  bg-highlightColor bg-opacity-30 border border-highlightColor hover:bg-opacity-0 transition-all duration-300 text-xs ">
                Framer Motion
              </span>
            </div>
          </div>
          {/* Pictures */}
          <div className="pictures ">
            <img
              className="rounded-lg   "
              src={posterCrowdMeter}
              alt="poster"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
