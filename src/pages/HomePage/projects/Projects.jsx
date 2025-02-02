import React from "react";
import {
  posterPortfolio2,
  posterCrowdMeter,
  posterGlobal,
  posterCanJet,
  posterPortfolio1,
  posterTermsIfanti,
  posterQuickBooker,
} from "../../../components/media";
import "./projects.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation("global");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div
      className="projects px-8 py-12 md:p-mid_pad"
      aria-label="Latest projects"
    >
      <h3>
        {t("latest.title")}
        <span className="detail-bg"></span>
      </h3>
      <motion.ul
        className="flex flex-wrap md:justify-center gap-y-10 gap-x-10 projects-container mt-12  lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {/* 1 */}
        <li className="project-card">
          <a
            href="https://github.com/luisgcode/Quickbooker"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Gtihub repository"
          >
            QuickBooker <FiArrowUpRight />
            <span className="italic text-highlightColor font-normal text-sm">
              Developing
            </span>
          </a>

          <div>
            <p>{t("projectQuickbooker.description")}</p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">React JS</li>
              <li className="custom-project-tag">Tailwind CSS</li>
              <li className="custom-project-tag">Responsive </li>
              <li className="custom-project-tag">Jira </li>
              <li className="custom-project-tag">Notion </li>
              <li className="custom-project-tag">Figma </li>
              <li className="custom-project-tag">Node JS </li>
              <li className="custom-project-tag">MySQL </li>
            </ul>
          </div>

          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterQuickBooker}
              alt="Quickbooker project's cover"
              loading="lazy"
            />
          </div>
        </li>
        {/* 2 */}
        <li className="project-card">
          <a
            href="https://github.com/luisgcode/portfolio2.0"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="Visit project's Github repository"
          >
            Portfolio (v2) <FiArrowUpRight />
          </a>
          <div>
            <p>{t("projectPortfolioV2.description")}</p>
          </div>
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">React JS</li>
              <li className="custom-project-tag">Tailwind CSS</li>
              <li className="custom-project-tag">Framer Motion</li>
              <li className="custom-project-tag">i18next</li>
              <li className="custom-project-tag">Responsive</li>
              <li className="custom-project-tag">SPA</li>
              <li className="custom-project-tag">Bilingual</li>
              <li className="custom-project-tag">Hostinger</li>
              <li className="custom-project-tag">GA4</li>
            </ul>
          </div>
          <div className="posters">
            <img
              className="rounded-lg"
              src={posterPortfolio2}
              alt="Portfolio v2 cover"
              loading="lazy"
            />
          </div>
        </li>
        {/* 3  */}
        <li className="project-card">
          <a
            href="https://globaltechnologies.web.app/"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="Visit project's web"
          >
            Global Tech <FiArrowUpRight />
          </a>

          <div>
            <p>{t("projectGlobal.description")}</p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">TypeScript</li>
              <li className="custom-project-tag">JavaScript</li>
              <li className="custom-project-tag">Responsive</li>
            </ul>
          </div>

          <div className="posters">
            <img
              className="rounded-lg "
              src={posterGlobal}
              alt="poster"
              loading="lazy"
            />
          </div>
        </li>
        {/* 4 */}
        <li className="project-card">
          <a
            href="https://github.com/luisgcode/pattern_library_canJet"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="Visit project's github repository"
          >
            Pattern Library & Dasboard <FiArrowUpRight />
          </a>
          <div>
            <p>{t("projectCanjet.description")}</p>
          </div>
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">D3.js</li>
              <li className="custom-project-tag">JavaScript</li>
              <li className="custom-project-tag">CSS</li>
            </ul>
          </div>
          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterCanJet}
              alt="Canjet project's cover"
              loading="lazy"
            />
          </div>
        </li>
        {/* 5  */}
        <li className="project-card">
          <a
            href="https://infanti.cl/pages/terminos-y-condiciones"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="Visit project's web"
          >
            Terms & Conditions Infanti <FiArrowUpRight />
          </a>

          <div>
            <p>
              <p>{t("projectInfantiTerms.description")}</p>
            </p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">CSS</li>
              <li className="custom-project-tag">Responsive</li>
              <li className="custom-project-tag">JavaScript</li>
            </ul>
          </div>

          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterTermsIfanti}
              alt="Infanti's terms and conditions cover"
              loading="lazy"
            />
          </div>
        </li>
        {/* 6 */}
        <li className="project-card">
          <a
            href="https://github.com/luisgcode/portfolio2024"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="See project on Github"
          >
            Portfolio (v1) <FiArrowUpRight />
          </a>
          <div>
            <p>
              <p>{t("projectPortfoliov1.description")}</p>
            </p>
          </div>
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">Sass</li>
              <li className="custom-project-tag">JavaScript</li>
              <li className="custom-project-tag">CSS</li>
              <li className="custom-project-tag">Bilingual</li>
              <li className="custom-project-tag">Accessible</li>
              <li className="custom-project-tag">Hostinger</li>
            </ul>
          </div>
          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterPortfolio1}
              alt="Portfolio v1 cover"
              loading="lazy"
            />
          </div>
        </li>

        {/* hidden */}
        {/* <div className="project-card">
          <a
            href="https://github.com/luisgcode/crowdMeterSystem"
            target="_blank"
            className="project-title font-bold mb-4 flex"
          >
            Occupancy System <FiArrowUpRight />
          </a>

          <div>
            <p>{t("projectOccupancy.description")}</p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">React JS</li>
              <li className="custom-project-tag">Tailwind CSS</li>
              <li className="custom-project-tag">JavaScript</li>
            </ul>
          </div>

          <div className="posters">
            <img className="rounded-lg  " src={posterCrowdMeter} alt="poster" />
          </div>
        </div> */}
        <Link to="/projects">
          <li>
            <a
              className="font-bold nav-link flex my-6"
              aria-label="See the full projects page"
            >
              <p>{t("viewfFullProjects.text")}</p> <FiArrowUpRight />
            </a>
          </li>
        </Link>
      </motion.ul>
    </div>
  );
};

export default Projects;
