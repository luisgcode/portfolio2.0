import React from "react";
import "./table.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TableList = () => {
  const { t } = useTranslation("global");

  // Projects data array for dynamic rendering and consistent animations
  const projects = [
    {
      id: 1,
      date: "Jun/2025",
      title: "Vivenutricion.cl",
      desktopTitle: "Vivenutricion.cl",
      mobileTitle: "Vivenutricion.cl",
      status: null,
      href: "https://vivenutricion.cl/nuevo-home/",
      linkText: "vivenutricion.cl",
      linkHref: "https://vivenutricion.cl/nuevo-home/",
      tags: ["WordPress", "Elementor PRO", "Booking System", "SEO", "Figma"],
    },
    {
      id: 2,
      date: "Jul/2025",
      title: "Western Fair District - OnBoard Hub",
      desktopTitle: "Western Fair District - OnBoard Hub",
      mobileTitle: "Western Fair OnBoard Hub",
      status: "In progress...",
      href: "https://western-on-board-hub-1tdf.vercel.app/",
      linkText: "western-on-board-hub-1tdf.vercel.app",
      linkHref: "https://western-on-board-hub-1tdf.vercel.app/",
      tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Vercel"],
    },
    {
      id: 3,
      date: "Jun/2025",
      title: "Resources $ page on Portfolio",
      desktopTitle: "Resources $ page on Portfolio",
      mobileTitle: "Resources $ page on Portfolio",
      status: "In progress...",
      href: "#",
      linkText: "luisgcode.com",
      linkHref: "https://luisgcode.com/resources",
      tags: ["React", "Tailwind CSS", "Accessibility (WCAG)", "Monetization", "UX Design"],
    },
    {
      id: 4,
      date: "Jun/2025",
      title: "CheTracker App",
      desktopTitle: "CheTracker App - Receipt Processing",
      mobileTitle: "CheTracker App",
      status: "In progress...",
      href: "https://github.com/luisgcode/cheTracker_app",
      linkText: "GitHub",
      linkHref: "https://github.com/luisgcode/cheTracker_app",
      tags: ["React Native", "OCR Processing", "Mobile App", "Image Processing", "SQLite"],
      isGitHub: true,
    },
    {
      id: 5,
      date: "May/2025",
      title: "Geeksonas",
      desktopTitle: "Geeksonas",
      mobileTitle: "Geeksonas",
      status: "In progress...",
      href: "#",
      linkText: "WordPress Development",
      linkHref: "#",
      tags: ["WordPress", "Elementor", "SEO", "Figma", "Multi-page"],
    },
    {
      id: 6,
      date: "May/2025",
      title: "Neurovet.cl",
      desktopTitle: "Neurovet.cl",
      mobileTitle: "Neurovet.cl",
      status: "In progress...",
      href: "#",
      linkText: "WordPress Development",
      linkHref: "#",
      tags: ["WordPress", "WPBakery", "Custom Plugins", "SEO", "Figma"],
    },
    {
      id: 7,
      date: "Mar/2025",
      title: "The Vocal Direction (Heidi Weinrib)",
      desktopTitle: "The Vocal Direction (Heidi Weinrib)",
      mobileTitle: "TheVocalDirection",
      status: null,
      href: "https://thevocaldirection.com",
      linkText: "thevocaldirection.com",
      linkHref: "https://thevocaldirection.com/",
      tags: ["WordPress", "Elementor", "Email Integration", "SEO", "Figma"],
    },
    {
      id: 8,
      date: "May/2025",
      title: "Western Fair The Market",
      desktopTitle: "Western Fair The Market",
      mobileTitle: "Western Fair The Market",
      status: null,
      href: "https://themarketwfd.com/",
      linkText: "themarketwfd.com",
      linkHref: "https://themarketwfd.com/",
      tags: ["Squarespace", "E-commerce", "SEO", "Multi-page", "Domain Management"],
    },
    {
      id: 9,
      date: "Mar/2025",
      title: "Wawabb - Bsale Store Optimization",
      desktopTitle: "Wawabb - Bsale Store Optimization",
      mobileTitle: "Wawabb.cl",
      status: null,
      href: "https://www.wawabb.cl/",
      linkText: "wawabb.cl",
      linkHref: "https://www.wawabb.cl/",
      tags: ["CMS Optimization", "E-commerce", "JavaScript", "POS Integration", "Performance"],
    },
    {
      id: 10,
      date: "2021-2024",
      title: "Infanti.cl - E-commerce Platform",
      desktopTitle: "Infanti.cl - E-commerce Platform",
      mobileTitle: "Infanti.cl Platform",
      status: null,
      href: "https://infanti.cl/",
      linkText: "infanti.cl",
      linkHref: "https://infanti.cl/",
      tags: ["Magento", "JavaScript", "API Integration", "Google Analytics", "Salesforce"],
    },
    {
      id: 11,
      date: "Feb/2025",
      title: "Portfolio AI Chatbot Integration",
      desktopTitle: "Portfolio AI Chatbot Integration",
      mobileTitle: "Portfolio AI Chatbot Integration",
      status: null,
      href: "#",
      linkText: "luisgcode.com",
      linkHref: "#",
      tags: ["AI Integration", "Botpress", "API Integration", "Conversational AI", "Knowledge Base"],
    },
    {
      id: 12,
      date: "Jan/2025",
      title: "Portfolio (v2)",
      desktopTitle: "Portfolio (v2)",
      mobileTitle: "Portfolio (v2)",
      status: null,
      href: "https://www.luisgcode.com/",
      linkText: "luisgcode.com",
      linkHref: "https://www.luisgcode.com/",
      tags: ["React", "Tailwind CSS", "Framer Motion", "i18next", "SPA"],
    },
    {
      id: 13,
      date: "2024",
      title: "Global Technologies - Optimization & Functionalities",
      desktopTitle: "Global Technologies - Optimization & Functionalities",
      mobileTitle: "globaltechnologies.web.app",
      status: null,
      href: "https://globaltechnologies.web.app/",
      linkText: "globaltechnologies.web.app",
      linkHref: "https://globaltechnologies.web.app/",
      tags: ["TypeScript", "JavaScript", "Performance Optimization", "Responsive Design", "Multi-page"],
    },
    {
      id: 14,
      date: "2024",
      title: "MCP - Model Context Protocol",
      desktopTitle: "MCP - Model Context Protocol",
      mobileTitle: "MCP Project",
      status: "In progress...",
      href: "#",
      linkText: "Research Project",
      linkHref: "#",
      tags: ["Anthropic", "Claude", "Servers", "MCP", "AI Integration"],
    },
    {
      id: 15,
      date: "2024",
      title: "Can Jet Pattern Library & Dashboard",
      desktopTitle: "Can Jet Pattern Library & Dashboard",
      mobileTitle: "Can Jet Pattern Library & Dashboard",
      status: null,
      href: "https://github.com/luisgcode/pattern_library_canJet",
      linkText: "GitHub",
      linkHref: "https://github.com/luisgcode/pattern_library_canJet",
      tags: ["D3.js", "Data Visualization", "JavaScript", "Dashboard", "CSS"],
      isGitHub: true,
    },
    {
      id: 16,
      date: "2024",
      title: "Portfolio (v1)",
      desktopTitle: "Portfolio (v1)",
      mobileTitle: "Portfolio (v1)",
      status: null,
      href: "https://github.com/luisgcode/portfolio2024",
      linkText: "GitHub",
      linkHref: "https://github.com/luisgcode/portfolio2024",
      tags: ["Sass", "JavaScript", "Responsive Design", "Accessibility", "Internationalization"],
      isGitHub: true,
    },
    {
      id: 17,
      date: "2024",
      title: "RBC Place - Information HUB",
      desktopTitle: "RBC Place - Information HUB",
      mobileTitle: "rbcplacelondon.com",
      status: null,
      href: "https://www.rbcplacelondon.com/",
      linkText: "rbcplacelondon.com",
      linkHref: "https://www.rbcplacelondon.com/",
      tags: ["Firebase", "JavaScript", "Real-time Data", "Cloud Integration", "CSS"],
    },
    {
      id: 18,
      date: "2024",
      title: "Infati stores page",
      desktopTitle: "Infati stores page",
      mobileTitle: "Infati stores page",
      status: null,
      href: "https://infanti.cl/pages/nuestras-tiendas-infanti",
      linkText: "infanti.cl",
      linkHref: "https://infanti.cl/pages/nuestras-tiendas-infanti",
      tags: ["CSS", "JavaScript", "E-commerce", "Store Locator", "Interactive Maps"],
    },
    {
      id: 19,
      date: "2024",
      title: "Infanti Terms & Conditions page",
      desktopTitle: "Infanti Terms & Conditions page",
      mobileTitle: "Infanti Terms & Conditions page",
      status: null,
      href: "https://infanti.cl/pages/terminos-y-condiciones",
      linkText: "infanti.cl",
      linkHref: "https://infanti.cl/pages/terminos-y-condiciones",
      tags: ["CSS", "JavaScript", "Accessibility", "Legal Compliance", "Content Management"],
    },
  ];
  return (
    <div>
      <div className="p-sma_pad md:p-mid_pad">
        <table className="table">
          {/* Table heading */}
          <thead className="text-left">
            <tr>
              <th scope="col" className=" ">
                Date
              </th>
              <th scope="col" className=" ">
                Projects
              </th>
              <th scope="col" className="hidden xl:table-cell   ">
                Features & Tech Stack
              </th>
              <th scope="col" className="hidden  xxl:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.id}
                variants={{
                  hidden: { x: 80, opacity: 0 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: (index + 1) * 0.1, // Dynamic delay calculation
                    },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                {/* Date */}
                <td>{project.date}</td>

                {/* Project Title */}
                <td className="font-semibold">
                  <div className="hidden xxl:table-cell">
                    {project.desktopTitle}
                    {project.status && (
                      <>
                        {" - "}
                        <span className="italic text-highlightColor font-normal">
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="xxl:hidden">
                    <a href={project.href} className="flex gap-1">
                      {project.mobileTitle}
                      {project.status && (
                        <span className="italic text-highlightColor font-normal">
                          {project.status}
                        </span>
                      )}
                      {project.href !== "#" && <FiArrowUpRight />}
                    </a>
                  </div>
                </td>

                {/* Tags */}
                <td className="tags-td hidden xl:flex">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="custom-project-tag">
                      {tag}
                    </span>
                  ))}
                </td>

                {/* Link */}
                <td className="link hidden xxl:table-cell">
                  <a
                    href={project.linkHref}
                    target={project.linkHref !== "#" ? "_blank" : undefined}
                    className="flex gap-1 hover:scale-110 transition-all duration-200"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.linkText}
                    {project.isGitHub ? (
                      <FaGithub />
                    ) : (
                      project.linkHref !== "#" && <FiArrowUpRight />
                    )}
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
