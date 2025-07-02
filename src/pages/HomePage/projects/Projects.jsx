import React, { useState } from "react";
import {
  posterPortfolio2,
  posterGlobal,
  posterQuickBooker,
  posterChatBot,
  posterVocal,
  posterInfanti,
  posterLoading,
  posterMarket,
  posterVivenutricion,
} from "../../../components/media";
import "./projects.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("Applications");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  // Tab categories
  const tabs = ["Applications", "Freelance", "AI Integrations", "My lab"];

  // All projects data - you can redistribute these later
  const allProjects = [
    {
      id: 1,
      category: "Freelance",
      title: "Neurovet.cl",
      href: "#",
      description: t("projectNeurovet.description"),
      status: "In progress...",
      tags: [
        "3 Pages",
        "Wordpress",
        "WPBakery",
        "Slider Revolution",
        "Yoast SEO",
        "Bookly",
        "Hostinger",
        "SEO",
        "Figma",
        "Photoshop",
      ],
      poster: null,
    },
    {
      id: 2,
      category: "Freelance",
      title: "Vivenutricion.cl",
      href: "#",
      description: t("projectVivenutricion.description"),
      status: "In progress...",
      tags: [
        "+10 Pages",
        "Wordpress",
        "Elementor PRO",
        "Bookly",
        "SEO",
        "Figma",
        "Custom CSS",
        "Unlimited Elements Elementor",
      ],
      poster: posterVivenutricion,
    },

    {
      id: 4,
      category: "Freelance",
      title: "thevocaldirection.com",
      href: "https://thevocaldirection.com/",
      description: t("projectVocal.description"),
      status: null,
      tags: [
        "1 Page",
        "Wordpress",
        "Mail Configuration",
        "Elementor",
        "CSS",
        "Contact Form 7",
        "Hostinger",
        "SEO",
        "Figma",
        "Photoshop",
      ],
      poster: posterVocal,
    },
    {
      id: 4,
      category: "Freelance",
      title: "AI Chatbot Integration",
      href: "https://github.com/luisgcode/portfolio2.0",
      description: t("projectChatbot.description"),
      status: null,
      tags: ["Botpress", "AI Design", "Data Storage", "Knowledge Answering"],
      poster: posterChatBot,
    },
    {
      id: 5,
      category: "AI Integrations",
      title: "AI Chatbot Integration",
      href: "https://github.com/luisgcode/portfolio2.0",
      description: t("projectChatbot.description"),
      status: null,
      tags: ["Botpress", "AI Design", "Data Storage", "Knowledge Answering"],
      poster: posterChatBot,
    },
    {
      id: 7,
      category: "Applications",
      title: "globaltechnologies.web.app",
      href: "https://globaltechnologies.web.app/",
      description: t("projectGlobal.description"),
      status: null,
      tags: ["6 Pages", "TypeScript", "JavaScript", "Responsive"],
      poster: posterGlobal,
    },
    {
      id: 8,
      category: "Applications",
      title: "Portfolio (v2)",
      href: "https://github.com/luisgcode/portfolio2.0",
      description: t("projectPortfolioV2.description"),
      status: null,
      tags: [
        "5 Pages",
        "React JS",
        "Tailwind CSS",
        "Framer Motion",
        "i18next",
        "Responsive",
        "SPA",
        "Bilingual",
        "Hostinger",
        "GA4",
      ],
      poster: posterPortfolio2,
    },
  ];

  // Filter projects by active tab
  const filteredProjects = allProjects.filter(
    (project) => project.category === activeTab
  );
  return (
    <div
      className="projects px-8 py-12 md:p-mid_pad"
      aria-label="Latest projects"
    >
      <h3 className="mt-20">
        {t("latest.title")}
        <span className="detail-bg"></span>
      </h3>

      {/* Tab Navigation */}
      <div className="mt-8 mb-8">
        <nav className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeTab === tab
                  ? "bg-highlightColor text-white"
                  : "bg-transparent border border-highlightColor text-highlightColor hover:bg-highlightColor hover:bg-opacity-10"
              }`}
              aria-label={`Show ${tab} projects`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Projects Container */}
      <motion.ul
        className="flex flex-wrap md:justify-center gap-y-2 gap-x-10 projects-container mt-12 lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        key={activeTab} // Re-trigger animation when tab changes
      >
        {filteredProjects.map((project) => (
          <li key={project.id} className="project-card">
            <a
              href={project.href}
              target="_blank"
              className="project-title font-bold mb-4 flex items-center"
              aria-label="Visit project's repository or website"
            >
              {project.title} <FiArrowUpRight />
              {project.status && (
                <span className="italic text-highlightColor font-normal text-sm ml-2">
                  {project.status}
                </span>
              )}
            </a>

            <div>
              <p>{project.description}</p>
            </div>

            <div className="py-4">
              <ul className="flex flex-wrap items-center gap-3">
                {project.tags.map((tag, index) => (
                  <span key={index} className="custom-project-tag">
                    {tag}
                  </span>
                ))}
              </ul>
            </div>

            {project.poster && (
              <div className="posters">
                <img
                  className="rounded-lg"
                  src={project.poster}
                  alt={`${project.title} project cover`}
                  loading="lazy"
                />
              </div>
            )}
          </li>
        ))}

        {/* Show message if no projects in category */}
        {filteredProjects.length === 0 && (
          <li className="w-full text-center py-8">
            <p className="text-gray-400 italic">
              No projects in {activeTab} category yet. Coming soon!
            </p>
          </li>
        )}

        {/* View Full Projects Link */}
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
