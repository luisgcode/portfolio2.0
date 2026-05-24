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
  const [activeTab, setActiveTab] = useState("Development");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  // Tab categories
  const tabs = ["Development", "Custom Solutions", "Freelance"];

  // All projects data - you can redistribute these later
  const allProjects = [
    // ===== DEVELOPMENT =====
    {
      id: 100,
      category: "Development",
      title: "dimplex.com",
      href: "https://www.dimplex.com",
      description: t("projectDimplex.description"),
      status: null,
      tags: ["Drupal", "CommerceTools", "Plytix", "SEO", "GA4"],
      poster: null,
    },
    {
      id: 101,
      category: "Development",
      title: "convectair.ca",
      href: "https://www.convectair.ca",
      description: t("projectConvectair.description"),
      status: null,
      tags: ["Drupal", "Bilingual EN/FR", "CommerceTools", "Plytix"],
      poster: null,
    },
    {
      id: 102,
      category: "Development",
      title: "cadetheat.com",
      href: "https://www.cadetheat.com",
      description: t("projectCadet.description"),
      status: null,
      tags: ["Drupal", "CommerceTools", "Plytix"],
      poster: null,
    },
    {
      id: 5,
      category: "Development",
      title: "Portfolio AI Chatbot",
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
        "Over 4 years developing and maintaining Chile's leading baby products e-commerce platform. Implemented same-day delivery integration, Salesforce CRM connections, and performance optimizations.",
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

    // ===== CUSTOM SOLUTIONS =====
    {
      id: 200,
      category: "Custom Solutions",
      title: "Amazon MAP Violation System",
      href: "#",
      description: t("projectAmazonMap.description"),
      status: null,
      tags: [
        "Fly.io",
        "GitHub Actions",
        "Rainforest API",
        "Python",
        "Automation",
      ],
      poster: null,
    },
    {
      id: 201,
      category: "Custom Solutions",
      title: "SEBRA (Second Brain)",
      href: "https://sebra.vercel.app",
      description: t("projectSebra.description"),
      status: "In Progress",
      tags: ["AI", "Knowledge Graph", "D3.js", "PowerShell", "Claude Code"],
      poster: null,
    },
    {
      id: 202,
      category: "Custom Solutions",
      title: "Ember (Botpress Chatbot for Dimplex)",
      href: "#",
      description: t("projectEmber.description"),
      status: "In Development",
      tags: ["Botpress", "Conversational AI", "EN/FR-CA", "Drupal", "Zendesk"],
      poster: null,
    },

    // ===== FREELANCE =====
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
      description: t("projectGeek.description"),
      status: null,
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
      id: 300,
      category: "Freelance",
      title: "Wawabb - Bsale Store Optimization",
      href: "https://www.wawabb.cl/",
      description:
        "CMS optimization and content translation to Spanish. Fixed existing errors and improved overall site functionality and performance.",
      status: null,
      tags: ["CMS Optimization", "E-commerce", "JavaScript", "POS Integration", "Performance"],
      poster: null,
    },
    {
      id: 301,
      category: "Freelance",
      title: "Western Fair The Market",
      href: "https://themarketwfd.com/",
      description: t("projectMarket.description"),
      status: null,
      tags: ["Squarespace", "E-commerce", "SEO", "Multi-page", "Domain Management"],
      poster: posterMarket,
    },
  ];

  // Filter projects by active tab
  const filteredProjects = allProjects.filter(
    (project) => project.category === activeTab
  );
  return (
    <section
      id="recent-work"
      className="projects px-8 py-12 md:p-mid_pad"
      aria-label="Latest projects"
    >
      <h3 className="mt-20">
        {t("latest.title")}
        <span className="detail-bg"></span>
      </h3>

      {/* Tab Navigation */}
      <div className="mt-8 mb-8">
        <nav className="flex flex-wrap gap-2 justify-center md:justify-start" aria-label="Project categories">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeTab === tab
                  ? "bg-highlightColor text-white border border-highlightColor"
                  : "bg-transparent border border-highlightColor text-highlightColor hover:bg-highlightColor hover:bg-opacity-10"
              }`}
              aria-label={`Show ${tab} projects`}
              aria-pressed={activeTab === tab}
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
        {filteredProjects.map((project) => {
          const isExternal = project.href && project.href !== "#";
          return (
            <li key={project.id} className="project-card">
              {isExternal ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title font-bold mb-4 flex items-center"
                  aria-label={`Visit ${project.title} (opens in new tab)`}
                >
                  {project.title} <FiArrowUpRight aria-hidden="true" />
                  {project.status && (
                    <span className="italic text-highlightColor font-normal text-sm ml-2">
                      {project.status}
                    </span>
                  )}
                </a>
              ) : (
                <span className="project-title font-bold mb-4 flex items-center">
                  {project.title}
                  {project.status && (
                    <span className="italic text-highlightColor font-normal text-sm ml-2">
                      {project.status}
                    </span>
                  )}
                </span>
              )}

              <div>
                <p>{project.description}</p>
              </div>

              <div className="py-4">
                <ul className="flex flex-wrap items-center gap-3" aria-label="Tech stack">
                  {project.tags.map((tag, index) => (
                    <li key={index} className="custom-project-tag">
                      {tag}
                    </li>
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
          );
        })}

        {/* Show message if no projects in category */}
        {filteredProjects.length === 0 && (
          <li className="w-full text-center py-8">
            <p className="text-gray-400 italic">
              No projects in {activeTab} category yet. Coming soon!
            </p>
          </li>
        )}

        {/* View Full Projects Link */}
        <li>
          <Link
            to="/projects"
            className="font-bold nav-link flex my-6"
            aria-label="See the full projects page"
          >
            <p>{t("viewfFullProjects.text")}</p> <FiArrowUpRight aria-hidden="true" />
          </Link>
        </li>
      </motion.ul>
    </section>
  );
};

export default Projects;
