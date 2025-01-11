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
      <div className="projects-container ">
        {/* 1 */}
        <div className="project-card p-3    ">
          <video className="rounded-lg" poster={portfolioPoster}>
            <source src={portfolioVideo} type="video/mp4" />
          </video>
          {/* <div className="py-4 px-2">
            <h5>luisgcode.com | Portfolio 2.0</h5>
            <span>
              <b>Teach Stacks:</b> React, Tailwind CSS & JavaSCript
            </span>
            <br />
            <span>
              <b>Goal:</b> Update my version 1.0, and showcase everything I have
              learned in the last 2 years.
            </span>
          </div>
          <div className=" bottom-info">
            <a className="flex gap-2  items-center" href="#">
              <CgWebsite />
              Live site
            </a>
            <a className="flex gap-2 items-center" href="#">
              <FaCode />
              View Code
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
