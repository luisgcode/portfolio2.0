import React from "react";
import { portfolioVideo, portfolioPoster } from "../import_data";
import { FaCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  return (
    <div className="projects sec-pad">
      <h3 className="heading-tertiary">
        My Latest Projects.
        <span className="brush"></span>
      </h3>
      <div className="pojects-container flex   justify-between flex-wrap">
        {/* Portfolio 2.0 */}
        <div className="project-card basis-1/3 min-w-[300px] max-w-[32%]">
          <video className="rounded-lg " poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
        </div>
        {/* CrowdMeter */}
        <div className="project-card basis-1/3 min-w-[300px] max-w-[32%] bg-highlightColor bg-opacity-20 border border-highlightColor rounded-lg">
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
          <div className="py-4 px-6">
            <h4>luisgcode.com | Portfolio 2.0</h4>
            <span>
              <b>Teach Stacks:</b> React, Tailwind CSS & JavaSCript
            </span>
            <br />
            <span>
              <b>Goal:</b> Update my version 1.0, and showcase everything I have
              learned in the last 2 years.
            </span>
          </div>
          <div className="py-4 px-6 flex justify-between items-center">
            <a className="flex gap-2  items-center" href="#">
              <CgWebsite />
              Live site
            </a>
            <a className="flex gap-2 items-center" href="#">
              <FaCode />
              View Code
            </a>
          </div>
        </div>
        {/* CrowdMeter */}
        <div className="project-card basis-1/3 min-w-[300px] max-w-[32%]">
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Projects;
