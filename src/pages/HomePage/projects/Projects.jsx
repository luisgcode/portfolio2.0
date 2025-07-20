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
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Projects = () => {
  const { t, i18n } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("Freelance");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  // Tab categories
  const tabs = ["Development", "Freelance", "My Lab", "Logs"];

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
      id: 3,
      category: "Freelance",
      title: "Geeksonas.com",
      href: "#",
      description: t("projectGeek.description"),
      status: "In progress...",
      tags: ["WordPress", "Elementor", "SEO", "Figma", "Multi-page"],
      poster: null,
    },

    {
      id: 4,
      category: "Freelance",
      title: "Neurovet.cl",
      href: "#",
      description: t("projectNeurovet.description"),
      status: "In progress...",
      tags: ["WordPress", "WPBakery", "Custom Plugins", "SEO", "Figma"],
      poster: null,
    },
    {
      id: 5,
      category: "My Lab",
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
      description: "3+ years developing and maintaining Chile's leading baby products e-commerce platform. Implemented same-day delivery integration, Salesforce CRM connections, and performance optimizations.",
      status: null,
      tags: ["Magento", "JavaScript", "API Integration", "Google Analytics", "Salesforce"],
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
      id: 8,
      category: "Development",
      title: "Western Fair District - OnBoard Hub",
      href: "https://western-on-board-hub-1tdf.vercel.app/",
      description: "A centralized digital hub for Western Fair District event services workers to access onboarding documents, PDFs, and essential instructions online.",
      status: "In progress...",
      tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Vercel"],
      poster: null,
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
      category: "My Lab",
      title: "CheTracker_app",
      href: "https://github.com/luisgcode/cheTracker_app",
      description: t("projectChetracker.description"),
      status: "In progress...",
      tags: [
        "React Native",
        "OCR Processing",
        "Mobile App",
        "Image Processing",
        "SQLite",
      ],
      poster: "",
    },
    {
      id: 11,
      category: "My Lab",
      title: "MCP - Model Context Protocol",
      href: "#",
      description: t("projectResourcesPage.description"),
      status: "In progress...",
      tags: ["Anthropic", "Claude", "Servers", "MCP"],
      poster: "",
    },
  ];

  // Dev Log entries data
  const devLogEntries = [
    {
      id: 1,
      date: "July 20, 2025",
      title: "AI-Powered Job Search Automation",
      description:
        "Built an intelligent job search robot using Make.com that automatically finds relevant opportunities, filters them based on my criteria, and tells me if it's worth applying. No more endless scrolling through job boards! 🤖...",
      platform: "Instagram",
      externalLink: "https://www.instagram.com/reel/DMRPkO8x22i/?utm_source=ig_web_copy_link&igsh=MTNwMDFsM3FzaTZ4Yg==",
    },
    {
      id: 2,
      date: "July 6, 2025",
      title: "Automated Learning with AI",
      description:
        "Using AI to track what I need to learn automatically Every project now has a simple rule: log concepts that challenge me. No manual notes, no forgetting what confused me 🧠...",
      platform: "Instagram",
      externalLink: "https://www.instagram.com/reel/DL0mNuOOE3q",
    },
    {
      id: 3,
      date: "July 2, 2025",
      title: "Claude is Now running on my Laptop",
      description:
        "Finally! Got it running on my machine! This setup gives it DIRECT access to my computer I just tell it what I want and watch the magic happen. 🧠...",
      platform: "Instagram",
      externalLink: "https://www.instagram.com/p/DLoJyn6uU2t/",
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

      {/* Dev Logs Container */}
      {activeTab === "Logs" ? (
        <motion.div
          className="dev-logs-container mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          key={activeTab}
        >
          {devLogEntries.map((entry) => (
            <div key={entry.id} className="dev-log-entry">
              <div className="log-header">
                <span className="date">{entry.date}</span>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <div className="log-footer">
                <a
                  href={entry.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  {entry.platform === "linkedin"
                    ? "View on my LinkedIn"
                    : "View on my Instagram"}{" "}
                  →
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        /* Projects Container */
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
      )}
    </div>
  );
};

export default Projects;
