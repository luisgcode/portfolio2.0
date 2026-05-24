import React from "react";
import { useTranslation } from "react-i18next";
import "./toolbox.css";
import { MdMonitor } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import {
  botpressLogo,
  figmaLogo,
  firebaseLogo,
  ga4Logo,
  powerBiLogo,
  pythonLogo,
  reactLogo,
  sassLogo,
  slackLogo,
  tailWindLogo,
  vsCodeLogo,
  npmLogo,
  mySqlLogo,
  jsLogo,
  htmlLogo,
  hotjarLogo,
  magentoLogo,
  gitLogo,
  gitHubLogo,
  prestashopLogo,
  wordpressLogo,
  jiraLogo,
  confluenceLogo,
  notionLogo,
  cssLogo,
  photoshopLogo,
  nodeLogo,
  claudeLogo,
  elementorLogo,
  mcpLlgo,
} from "../../../components/media";

const Toolbox = () => {
  const { t, i18n } = useTranslation("global");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  // Toolbox categories data
  // Tools without a logo render as a text chip — drop the SVG into
  // src/assets/images/logos/ later and add it to media.jsx to swap.
  const toolboxCategories = [
    {
      id: 1,
      title: "Front-end",
      icon: <MdMonitor />,
      ariaLabel: "Frontend Tools",
      tools: [
        { logo: reactLogo, name: "React JS", alt: "React logo" },
        { logo: jsLogo, name: "JavaScript", alt: "JavaScript logo" },
        { logo: tailWindLogo, name: "Tailwind CSS", alt: "Tailwind logo" },
        { logo: sassLogo, name: "Sass", alt: "Sass logo" },
        { logo: htmlLogo, name: "HTML", alt: "HTML logo" },
        { logo: cssLogo, name: "CSS", alt: "CSS logo" },
      ],
    },
    {
      id: 6,
      title: "CMS & Commerce",
      icon: <IoSettingsOutline />,
      ariaLabel: "Content Management and Commerce platforms",
      tools: [
        { logo: null, name: "Drupal", alt: "Drupal" },
        { logo: wordpressLogo, name: "WordPress", alt: "WordPress logo" },
        { logo: magentoLogo, name: "Magento", alt: "Magento logo" },
        { logo: null, name: "CommerceTools", alt: "CommerceTools" },
        { logo: null, name: "Plytix (PIM)", alt: "Plytix" },
        { logo: elementorLogo, name: "Elementor & PRO", alt: "Elementor logo" },
        { logo: prestashopLogo, name: "Prestashop", alt: "Prestashop logo" },
      ],
    },
    {
      id: 3,
      title: "AI & Automation",
      icon: <FaTools />,
      ariaLabel: "AI and automation tools",
      tools: [
        { logo: claudeLogo, name: "Claude Code", alt: "Claude logo" },
        { logo: mcpLlgo, name: "MCP", alt: "MCP logo" },
        { logo: botpressLogo, name: "Botpress", alt: "Botpress logo" },
        { logo: null, name: "GitHub Actions", alt: "GitHub Actions" },
        { logo: null, name: "Fly.io", alt: "Fly.io" },
      ],
    },
    {
      id: 2,
      title: "Back-end & Data",
      icon: <FaServer />,
      ariaLabel: "Backend and Data tools",
      tools: [
        { logo: nodeLogo, name: "Node.js", alt: "Node.js logo" },
        { logo: pythonLogo, name: "Python", alt: "Python logo" },
        { logo: firebaseLogo, name: "Firebase", alt: "Firebase logo" },
        { logo: mySqlLogo, name: "MySQL", alt: "MySQL logo" },
      ],
    },
    {
      id: 5,
      title: "Analytics & SEO",
      icon: <MdOutlineAnalytics />,
      ariaLabel: "Analytics and SEO tools",
      tools: [
        { logo: ga4Logo, name: "GA4", alt: "Google Analytics logo" },
        { logo: hotjarLogo, name: "Hotjar", alt: "Hotjar logo" },
        { logo: null, name: "Microsoft Clarity", alt: "Microsoft Clarity" },
        { logo: null, name: "SEMrush", alt: "SEMrush" },
        { logo: null, name: "Google Search Console", alt: "Google Search Console" },
        { logo: null, name: "Google Tag Manager", alt: "Google Tag Manager" },
        { logo: powerBiLogo, name: "Power BI", alt: "Power BI logo" },
        { logo: null, name: "Looker Studio", alt: "Looker Studio" },
      ],
    },
    {
      id: 4,
      title: "Dev tools & Collaboration",
      icon: <FaTools />,
      ariaLabel: "Development and collaboration tools",
      tools: [
        { logo: gitHubLogo, name: "GitHub", alt: "GitHub logo" },
        { logo: gitLogo, name: "Git", alt: "Git logo" },
        { logo: vsCodeLogo, name: "VS Code", alt: "VS Code logo" },
        { logo: figmaLogo, name: "Figma", alt: "Figma logo" },
        { logo: photoshopLogo, name: "Photoshop", alt: "Photoshop logo" },
        { logo: notionLogo, name: "Notion", alt: "Notion logo" },
        { logo: confluenceLogo, name: "Confluence", alt: "Confluence logo" },
        { logo: jiraLogo, name: "Jira", alt: "Jira logo" },
        { logo: slackLogo, name: "Slack", alt: "Slack logo" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="toolbox px-8 py-6 md:p-mid_pad mt-6 md:mt-0"
      aria-label="Tools and technologies"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="toolbox-heading mb-6">
          <h3>
            {t("toolBox.title")}
            <span className="detail-bg"></span>
          </h3>
          <p>{t("toolBox.description")}</p>
        </div>
        <div
          className="toolbox-wrapp flex flex-col gap-3 md:gap-0 "
          role="region"
        >
          {toolboxCategories.map((category) => (
            <section
              key={category.id}
              className="tools-row"
              aria-label={category.ariaLabel}
            >
              <h5 className="custom-tools-row-title">
                {category.icon}
                {category.title}
              </h5>
              <div className="tools-wrapper">
                {category.tools.map((tool, index) => (
                  <div key={index} className="tool-box">
                    {tool.logo ? (
                      <img src={tool.logo} alt={tool.alt} loading="lazy" />
                    ) : (
                      <div
                        className="tool-box-text-placeholder"
                        aria-hidden="true"
                      >
                        {tool.name.charAt(0)}
                      </div>
                    )}
                    <small>{tool.name}</small>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Toolbox;
