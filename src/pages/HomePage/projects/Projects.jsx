import React from "react";
import {
  posterPortfolio2,
  posterCrowdMeter,
  posterGlobal,
  posterCanJet,
  posterPortfolio1,
  posterTermsIfanti,
} from "../../../components/media";
import "./projects.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects px-8 py-6 md:p-mid_pad">
      <h3>
        My Latest Projects.
        <span className="detail-bg"></span>
      </h3>
      <motion.div
        className="flex flex-wrap md:justify-center gap-y-10 gap-x-10 projects-container mt-12  lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
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
            <div className="flex flex-wrap items-center gap-3">
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
            <img className="rounded-lg" src={posterPortfolio2} alt="poster" />
          </div>
        </div>
        {/* 2 */}
        <div className="project-card">
          <a
            href="https://globaltechnologies.web.app/"
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
            href="https://github.com/luisgcode/pattern_library_canJet"
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
        {/* 4 */}{" "}
        <div className="project-card">
          <a
            href="https://infanti.cl/pages/terminos-y-condiciones"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            Terms & Conditions Infanti <FiArrowUpRight />
          </a>

          <div>
            <p>
              Optimize the accessibility of legal information and print document
              for users.
            </p>
          </div>

          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">CSS</span>
              <span className="custom-project-tag">Responsive</span>
              <span className="custom-project-tag">JavaScript</span>
            </div>
          </div>

          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterTermsIfanti}
              alt="poster"
            />
          </div>
        </div>
        {/* 5  */}
        <div className="project-card">
          <a
            href="https://github.com/luisgcode/portfolio2024"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            Portfolio (v1) <FiArrowUpRight />
          </a>
          <div>
            <p>Showcase my skills and experiences effectively.</p>
          </div>
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">Sass</span>
              <span className="custom-project-tag">JavaScript</span>
              <span className="custom-project-tag">CSS</span>
            </div>
          </div>
          <div className="posters">
            <img className="rounded-lg  " src={posterPortfolio1} alt="poster" />
          </div>
        </div>
        {/* 6 */}
        <div className="project-card">
          <a
            href="https://github.com/luisgcode/crowdMeterSystem"
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
        <Link to="/projects">
          <li>
            <a className="font-bold nav-link flex my-6">
              View full list of projects <FiArrowUpRight />
            </a>
          </li>
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
