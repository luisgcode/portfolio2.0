import React from "react";
import {
  posterPortfolio2,
  posterCrowdMeter,
  posterGlobal,
  posterCanJet,
} from "../../../components/media";
import "./projects.css";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="projects px-8 py-6 md:p-mid_pad">
      <h3>
        My Latest Projects.
        <span className="detail-bg"></span>
      </h3>
      <div className="flex flex-wrap md:justify-center gap-y-10 gap-x-10 projects-container mt-12  lg:justify-between ">
        {/* 1 */}

        <div className="project-card">
          <a
            href="https://www.luisgcode.com/"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            luisgcode.com (v2) <FiArrowUpRight />
          </a>
          <div>
            <p>
              New Portfolio designed and developed to showcase the tools and
              technologies I’ve mastered over the past year, including React,
              and Tailwind CSS, in a modern, mobile-first design.
            </p>
          </div>
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3 ">
              <span className="custom-project-tag">React JS</span>
              <span className="custom-project-tag">Tailwind CSS</span>
              <span className="custom-project-tag">Framer Motion</span>
              <span className="custom-project-tag">Responsive</span>
              <span className="custom-project-tag">SPA</span>
              <span className="custom-project-tag">Bilingual</span>
              <span className="custom-project-tag">Accessible</span>
            </div>
          </div>

          <div className="posters">
            <img className="rounded-lg " src={posterPortfolio2} alt="poster" />
          </div>
        </div>
        {/* 2 */}
        <div className="project-card">
          <a
            href="https://www.luisgcode.com/"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            Global Tech <FiArrowUpRight />
          </a>

          <div>
            <p>
              The client requested to optimize their website, fix existing
              errors, improve overall functionality, and translate the content
              into Spanish. Project approached by enhancing site performance.
            </p>
          </div>

          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">TypeScript</span>
              <span className="custom-project-tag">JavaScript</span>
              <span className="custom-project-tag">Responsive</span>
            </div>
          </div>

          <div className="posters">
            <img className="rounded-lg " src={posterGlobal} alt="poster" />
          </div>
        </div>
        {/* 3  */}
        <div className="project-card">
          <a
            href="https://www.luisgcode.com/"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            Pattern Library & Dasboard <FiArrowUpRight />
          </a>
          <div>
            <p>
              Responsible for creating a dashboard that visualizes data through
              interactive charts. To achieve this, I used D3.js.
            </p>
          </div>
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">D3.js</span>
              <span className="custom-project-tag">JavaScript</span>
              <span className="custom-project-tag">CSS</span>
            </div>
          </div>
          <div className="posters">
            <img className="rounded-lg  " src={posterCanJet} alt="poster" />
          </div>
        </div>
        {/* 4 */}
        <div className="project-card">
          <a
            href="https://www.luisgcode.com/"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            Occupancy System <FiArrowUpRight />
          </a>

          <div>
            <p>
              Designed to display real-time business occupancy levels, featuring
              a clean and responsive UI styled with Tailwind CSS. This component
              is ready to integrate with APIs that provide crowd data
            </p>
          </div>

          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">React JS</span>
              <span className="custom-project-tag">Tailwind CSS</span>
              <span className="custom-project-tag">JavaScript</span>
            </div>
          </div>

          <div className="posters">
            <img className="rounded-lg  " src={posterCrowdMeter} alt="poster" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
