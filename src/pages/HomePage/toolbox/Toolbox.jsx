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
  const toolboxCategories = [
    {
      id: 1,
      title: "Front-end",
      icon: <MdMonitor />,
      ariaLabel: "Frontend Tools",
      tools: [
        { logo: reactLogo, name: "React JS", alt: "logo React" },
        { logo: jsLogo, name: "JavaScript", alt: "logo javascript" },
        { logo: tailWindLogo, name: "Tailwind CSS", alt: "logo Tailwind" },
        { logo: sassLogo, name: "Sass", alt: "logo Sass" },
        { logo: htmlLogo, name: "HTML", alt: "logo HTML" },
        { logo: cssLogo, name: "CSS", alt: "logo CSS" },
      ],
    },
    {
      id: 2,
      title: "Back-end",
      icon: <FaServer />,
      ariaLabel: "Backend Tools",
      tools: [
        { logo: firebaseLogo, name: "Firebase", alt: "logo Firebase" },
        { logo: mySqlLogo, name: "MySQL", alt: "logo MySQL" },
        { logo: nodeLogo, name: "Node js", alt: "logo MySQL" },
      ],
    },
    {
      id: 3,
      title: "AI & Automation",
      icon: <FaTools />,
      ariaLabel: "Development & collaboration Tools",
      tools: [
        { logo: botpressLogo, name: "BotPress AI", alt: "logo BotPress" },
        { logo: claudeLogo, name: "Claude Code", alt: "logo Claude Code" },
        { logo: mcpLlgo, name: "MCP", alt: "logo Claude Code" },
      ],
    },
    {
      id: 4,
      title: "Development & Collaboration",
      icon: <FaTools />,
      ariaLabel: "Development & collaboration Tools",
      tools: [
        { logo: gitHubLogo, name: "GitHub", alt: "logo GitHub" },
        { logo: gitLogo, name: "Git", alt: "logo Git" },
        { logo: vsCodeLogo, name: "VS Code", alt: "logo VS Code" },
        { logo: figmaLogo, name: "Figma", alt: "logo Figma" },
        { logo: photoshopLogo, name: "Photoshop", alt: "logo Photoshop" },
        { logo: notionLogo, name: "Notion", alt: "logo Notion" },
        { logo: confluenceLogo, name: "Confluence", alt: "logo Confluence" },
        { logo: jiraLogo, name: "Jira", alt: "logo Jira" },
        { logo: slackLogo, name: "Slack", alt: "logo Slack" },
      ],
    },
    {
      id: 5,
      title: "Analytics",
      icon: <MdOutlineAnalytics />,
      ariaLabel: "Analytics Tools",
      tools: [
        { logo: powerBiLogo, name: "Power BI", alt: "logo Power BI" },
        { logo: ga4Logo, name: "GA4", alt: "logo GA4" },
        { logo: hotjarLogo, name: "Hotjar", alt: "logo Hotjar" },
      ],
    },
    {
      id: 6,
      title: "CMS",
      icon: <IoSettingsOutline />,
      ariaLabel: "Content Management systems Tools",
      tools: [
        { logo: magentoLogo, name: "Magento", alt: "logo Magento" },
        { logo: wordpressLogo, name: "Wordpress", alt: "logo Wordpress" },
        { logo: elementorLogo, name: "Elementor & PRO", alt: "logo Elementor" },
        { logo: prestashopLogo, name: "Prestashop", alt: "logo Prestashop" },
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
                    <img src={tool.logo} alt={tool.alt} loading="lazy" />
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
