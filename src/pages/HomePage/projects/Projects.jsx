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
  const [activeTab, setActiveTab] = useState("Freelance");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  // Tab categories
  const tabs = ["Development", "Freelance", "Experiments"];

  // All projects data - you can redistribute these later
  const allProjects = [
    {
      id: 1,

      category: "Freelance",
      title: "thevocaldirection.com",
      href: "https://thevocaldirection.com/",
      description: t("projectVocal.description"),
      status: null,
      tags: ["WordPress", "Elementor", "Email Integration", "SEO", "Figma"],
      poster: posterVocal,
    },
    {
      id: 2,
      category: "Freelance",
      title: "Vivenutricion.cl",
      href: "https://vivenutricion.cl/nuevo-home/",
      description: t("projectVivenutricion.description"),
      status: null,
      tags: ["WordPress", "Elementor PRO", "Booking System", "SEO", "Figma"],
      poster: posterVivenutricion,
    },
    {
      id: 13,
      category: "Freelance",
      title: "Geeksonas",
      href: "#",
      description:
        "WordPress website for YouTube content creator with custom YouTube API integration. Managing extensive video content catalog and building dynamic content management system.",
      status: "In Progress",
      tags: [
        "WordPress",
        "YouTube API",
        "Content Management",
        "Custom Integration",
        "Video Content",
      ],
      poster: null,
    },
    {
      id: 14,
      category: "Freelance",
      title: "Neurovet",
      href: "#",
      description:
        "Complete migration from Wix to WordPress with full website redesign and development. Implementing appointment booking with Bookly, SEO optimization with Yoast, and custom veterinary features.",
      status: "In Progress",
      tags: [
        "WordPress",
        "Wix Migration",
        "Bookly",
        "Yoast SEO",
        "Website Redesign",
      ],
      poster: null,
    },

    {
      id: 5,
      category: "Development",
      title: "AI Chatbot Integration",
      href: "https://github.com/luisgcode/portfolio2.0",
      description: t("projectChatbot.description"),
      status: null,
      tags: [
        "AI Integration",
        "Botpress",
        "API Integration",
        "Conversational AI",
        "Knowledge Base",
      ],
      poster: posterChatBot,
    },
    {
      id: 6,
      category: "Development",
      title: "Infanti.cl - E-commerce Platform",
      href: "https://infanti.cl/",
      description:
        "3+ years developing and maintaining Chile's leading baby products e-commerce platform. Implemented same-day delivery integration, Salesforce CRM connections, and performance optimizations.",
      status: null,
      tags: [
        "Magento",
        "JavaScript",
        "API Integration",
        "Google Analytics",
        "Salesforce",
      ],
      poster: posterInfanti,
    },
    {
      id: 7,
      category: "Development",
      title: "globaltechnologies.web.app",
      href: "https://globaltechnologies.web.app/",
      description: t("projectGlobal.description"),
      status: null,
      tags: [
        "TypeScript",
        "JavaScript",
        "Performance Optimization",
        "Responsive Design",
        "Multi-page",
      ],
      poster: posterGlobal,
    },
    {
      id: 9,
      category: "Development",
      title: "Portfolio (v2)",
      href: "https://github.com/luisgcode/portfolio2.0",
      description: t("projectPortfolioV2.description"),
      status: null,
      tags: ["React", "Tailwind CSS", "Framer Motion", "i18next", "SPA"],
      poster: posterPortfolio2,
    },
    {
      id: 10,
      category: "Experiments",
      title: "Claude Code - AI Assisted Development",
      href: "https://claude.ai/code",
      description:
        "Experimenting with Claude Code for assisted development workflows including debugging, professional documentation, code reviews, and automated testing implementation.",
      status: "Active",
      tags: [
        "Claude Code",
        "AI Development",
        "Debugging",
        "Documentation",
        "Code Reviews",
      ],
      poster: null,
    },
  ];

  // Filter projects by active tab
  const filteredProjects = allProjects.filter(
    (project) => project.category === activeTab
  );
  return (
    <div
      id="recent-work"
      className="projects px-8 py-12 md:p-mid_pad"
      aria-My
      label="Latest projects"
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
                  ? "bg-highlightColor text-white border border-highlightColor"
                  : "bg-transparent border border-highlightColor text-highlightColor hover:bg-highlightColor hover:bg-opacity-10"
              }`}
              aria-My
              label={`Show ${tab} projects`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Projects Container  */}
      <motion.ul
        className="flex flex-wrap md:justify-center gap-y-2 gap-x-10 projects-container mt-12 lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        key={activeTab}
      >
        {filteredProjects.map((project) => (
          <li key={project.id} className="project-card">
            <a
              href={project.href}
              target="_blank"
              className="project-title font-bold mb-4 flex items-center"
              aria-My
              label="Visit project's repository or website"
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
              aria-My
              label="See the full projects page"
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
