import React from "react";
import {
  posterPortfolio2,
  posterGlobal,
  posterQuickBooker,
  posterChatBot,
  posterVocal,
  posterInfanti,
  posterLoading,
  posterMarket,
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
      <h3 className="mt-20">
        {t("latest.title")}
        <span className="detail-bg"></span>
      </h3>
      <motion.ul
        className="flex flex-wrap md:justify-center gap-y-2 gap-x-10 projects-container mt-12  lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {/* 1 Neurovet */}
        <li className="project-card">
          <a
            href="#"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Gtihub repository"
          >
            Neurovet.cl <FiArrowUpRight />
            <span className="italic text-highlightColor font-normal text-sm">
              In progress...
            </span>
          </a>

          <div>
            <p>{t("projectNeurovet.description")}</p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">Wordpress</span>
              <span className="custom-project-tag">WPBakery </span>
              <span className="custom-project-tag">Slider Revolution </span>
              <span className="custom-project-tag">Yoast SEO</span>
              <span className="custom-project-tag">Bookly</span>
              <span className="custom-project-tag">Hostinger</span>
              <span className="custom-project-tag">SEO</span>
              <span className="custom-project-tag">Figma</span>
              <span className="custom-project-tag">Photoshop</span>
            </ul>
          </div>

          {/* <div className="posters">
            <img
              className="rounded-lg  "
              src={posterLoading}
              alt="Quickbooker project's cover"
              loading="lazy"
            />
          </div> */}
        </li>

        {/* 2 Vivenutricion */}
        <li className="project-card">
          <a
            href="#"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Gtihub repository"
          >
            Vivenutricion.cl <FiArrowUpRight />
            <span className="italic text-highlightColor font-normal text-sm">
              In progress...
            </span>
          </a>

          <div>
            <p>{t("projectVivenutricion.description")}</p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <span className="custom-project-tag">Wordpress</span>
              <span className="custom-project-tag">Elementor PRO</span>
              <span className="custom-project-tag">Bookly</span>
              <span className="custom-project-tag">SEO</span>
              <span className="custom-project-tag">Figma</span>
              <span className="custom-project-tag">Custom CSS</span>
              <span className="custom-project-tag">
                Unlimited Elements Elementor
              </span>
            </ul>
          </div>

          {/* <div className="posters">
            <img
              className="rounded-lg  "
              src={posterLoading}
              alt="Quickbooker project's cover"
              loading="lazy"
            />
          </div> */}
        </li>

        {/* 2 Geek sonas*/}
        {/*  <li className="project-card">
            <a
            href="#"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Gtihub repository"
          >
            geeksonas.com <FiArrowUpRight />
            <span className="italic text-highlightColor font-normal text-sm">
              In progress...
            </span>
          </a>

          <div>
            <p>{t("projectGeek.description")}</p>
          </div>
          
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">Wordpress</li>
              <li className="custom-project-tag">Elementor</li>
              <li className="custom-project-tag">SEO</li>
              <li className="custom-project-tag">Hostinger</li>
              <li className="custom-project-tag">Figma</li>
              <li className="custom-project-tag">Photoshop</li>
              <li className="custom-project-tag">Firefly</li>
            </ul>
          </div> */}

        {/* <div className="posters">
            <img
              className="rounded-lg  "
              src={posterLoading}
              alt="Quickbooker project's cover"
              loading="lazy"
            />
          </div> 
        </li>*/}

        {/* 3 Infanti.cl*/}
        <li className="project-card">
          <a
            href="https://infanti.cl/"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Gtihub repository"
          >
            Infanti.cl <FiArrowUpRight />
          </a>

          <div>
            <p>{t("projectInfanti.description")}</p>
          </div>

          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">Wordpress</li>
              <li className="custom-project-tag">Elementor</li>
              <li className="custom-project-tag">SEO</li>
              <li className="custom-project-tag">Hostinger</li>
              <li className="custom-project-tag">Figma</li>
              <li className="custom-project-tag">Photoshop</li>
              <li className="custom-project-tag">Firefly</li>
            </ul>
          </div>

          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterInfanti}
              alt="Infanti.cl project's cover"
              loading="lazy"
            />
          </div>
        </li>

        {/* 4 thevocaldirection */}
        <li className="project-card">
          <a
            href="https://thevocaldirection.com/"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Github repository"
          >
            thevocaldirection.com <FiArrowUpRight />
          </a>
          <div>
            <p>{t("projectVocal.description")}</p>
          </div>
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">Wordpress</li>
              <li className="custom-project-tag">Mail Configuration</li>
              <li className="custom-project-tag">Elementor</li>
              <li className="custom-project-tag">CSS</li>
              <li className="custom-project-tag">Contact Form 7 </li>
              <li className="custom-project-tag">Hostinger</li>
              <li className="custom-project-tag">SEO</li>
              <li className="custom-project-tag">Figma</li>
              <li className="custom-project-tag">Photoshop</li>
            </ul>
          </div>
          <div className="posters">
            <img
              className="rounded-lg"
              src={posterVocal}
              alt="Portfolio v2 cover"
              loading="lazy"
            />
          </div>
        </li>

        {/* 5 Chatbot*/}
        <li className="project-card">
          <a
            href="https://github.com/luisgcode/portfolio2.0"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="Visit project's Github repository"
          >
            AI Chatbot Integration <FiArrowUpRight />
          </a>
          <div>
            <p>{t("projectChatbot.description")}</p>
          </div>
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">Botpress</li>
              <li className="custom-project-tag">AI Design</li>
              <li className="custom-project-tag">Data Storage</li>
              <li className="custom-project-tag">Knowledge Answering</li>
            </ul>
          </div>
          <div className="posters">
            <img
              className="rounded-lg"
              src={posterChatBot}
              alt="Portfolio v2 cover"
              loading="lazy"
            />
          </div>
        </li>

        {/* 6 themarket */}
        <li className="project-card">
          <a
            href="https://themarketwfd.com/"
            target="_blank"
            className="project-title font-bold mb-4 flex items-center"
            aria-label="Visit project's Github repository"
          >
            themarketwfd.com <FiArrowUpRight />
          </a>
          <div>
            <p>{t("projectMarket.description")}</p>
          </div>
          <div className="py-4">
            <ul className="flex flex-wrap items-center gap-3">
              <li className="custom-project-tag">Squarespace</li>
              <li className="custom-project-tag">GoDaddy</li>
              <li className="custom-project-tag">SEO</li>
            </ul>
          </div>
          <div className="posters">
            <img
              className="rounded-lg  "
              src={posterMarket}
              alt="Quickbooker project's cover"
              loading="lazy"
            />
          </div>
        </li>

        {/* 7 Global tech */}
        <li className="project-card">
          <a
            href="https://globaltechnologies.web.app/"
            target="_blank"
            className="project-title font-bold mb-4 flex"
            aria-label="Visit project's web"
          >
            globaltechnologies.web.app <FiArrowUpRight />
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

        {/* 8 portfolio */}
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
