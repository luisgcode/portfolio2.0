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
  phpLogo,
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
} from "../../../components/media";

const Toolbox = () => {
  const { t, i18n } = useTranslation("global");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <section
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
            {t("toolBox.title")}9<span className="detail-bg"></span>
          </h3>
          <p>{t("toolBox.description")}</p>
        </div>
        <div
          className="toolbox-wrapp flex flex-col gap-3 md:gap-0 "
          role="region"
        >
          <section className="tools-row  " aria-label="Frontend Tools">
            <h5 className="custom-tools-row-title">
              <MdMonitor />
              Front-end
            </h5>
            <div className="tools-wrapper">
              {/* React */}
              <div className="tool-box">
                <img src={reactLogo} alt="logo React " loading="lazy" />
                <small>React JS</small>
              </div>
              {/* JS */}
              <div className="tool-box">
                <img src={jsLogo} alt="logo javascript " loading="lazy" />
                <small>JavaScript</small>
              </div>
              {/* Tailwind */}
              <div className="tool-box">
                <img src={tailWindLogo} alt="logo javascript " loading="lazy" />
                <small>Tailwind CSS</small>
              </div>
              {/* Sass */}
              <div className="tool-box">
                <img src={sassLogo} alt="logo javascript " loading="lazy" />
                <small>Sass</small>
              </div>

              {/* Html */}
              <div className="tool-box">
                <img src={htmlLogo} alt="logo React " loading="lazy" />
                <small>HTML</small>
              </div>

              {/* CSS */}
              <div className="tool-box">
                <img src={cssLogo} alt="logo React " loading="lazy" />
                <small>CSS</small>
              </div>
            </div>
          </section>
          <section className="tools-row  " aria-label="Backend Tools">
            <h5 className="custom-tools-row-title">
              <FaServer /> Back-end
            </h5>
            <div className="tools-wrapper">
              {/* Botpress */}
              <div className="tool-box">
                <img src={botpressLogo} alt="logo Python " loading="lazy" />
                <small>BotPress AI</small>
              </div>
              {/* Python */}
              <div className="tool-box">
                <img src={pythonLogo} alt="logo Python " loading="lazy" />
                <small>Python</small>
              </div>
              {/* php */}
              <div className="tool-box">
                <img src={phpLogo} alt="logo PHP " loading="lazy" />
                <small>PHP</small>
              </div>
              {/* firebase */}
              <div className="tool-box">
                <img src={firebaseLogo} alt="logo firebase " loading="lazy" />
                <small>Firebase</small>
              </div>
              {/* Mysql */}
              <div className="tool-box">
                <img src={mySqlLogo} alt="logo MySQL " loading="lazy" />
                <small>MySQL</small>
              </div>
            </div>
          </section>
          <section
            className="tools-row"
            aria-label="Development & collaboration Tools"
          >
            <h5 className="custom-tools-row-title">
              <FaTools />
              Development & Collaboration
            </h5>
            <div className="tools-wrapper">
              {/* Github */}
              <div className="tool-box">
                <img src={gitHubLogo} alt="logo GitHub " loading="lazy" />
                <small>GitHub</small>
              </div>
              {/* Git */}
              <div className="tool-box">
                <img src={gitLogo} alt="logo Git " loading="lazy" />
                <small>Git</small>
              </div>
              {/* vs code */}
              <div className="tool-box">
                <img src={vsCodeLogo} alt="logo VS Code " loading="lazy" />
                <small>VS Code</small>
              </div>
              {/* Figma */}
              <div className="tool-box">
                <img src={figmaLogo} alt="logo Figma " loading="lazy" />
                <small>Figma</small>
              </div>
              {/* Photoshop */}
              <div className="tool-box">
                <img src={photoshopLogo} alt="logo Figma " loading="lazy" />
                <small>Photoshop</small>
              </div>
              {/* Notion */}
              <div className="tool-box">
                <img src={notionLogo} alt="logo Notion " loading="lazy" />
                <small>Notion</small>
              </div>
              {/* Confluence */}
              <div className="tool-box">
                <img
                  src={confluenceLogo}
                  alt="logo Confluence "
                  loading="lazy"
                />
                <small>Confluence</small>
              </div>
              {/* Jira */}
              <div className="tool-box">
                <img src={jiraLogo} alt="logo Jira " loading="lazy" />
                <small>Jira</small>
              </div>
              {/* Slack */}
              <div className="tool-box">
                <img src={slackLogo} alt="logo Slack " loading="lazy" />
                <small>Slack</small>
              </div>
            </div>
          </section>
          <section className="tools-row" aria-label="Analytics Tools">
            <h5 className="custom-tools-row-title">
              <MdOutlineAnalytics />
              Analytics
            </h5>
            <div className="tools-wrapper">
              {/* Power BI */}
              <div className="tool-box">
                <img src={powerBiLogo} alt="logo Power BI" loading="lazy" />
                <small>Power BI</small>
              </div>
              {/* GA4 */}
              <div className="tool-box">
                <img src={ga4Logo} alt="logo GA4 " loading="lazy" />
                <small>GA4</small>
              </div>
              {/* Hotjar */}
              <div className="tool-box">
                <img src={hotjarLogo} alt="logo Hotjar " loading="lazy" />
                <small>Hotjar</small>
              </div>
            </div>
          </section>
          <section
            className="tools-row"
            aria-label="Content Management systems Tools"
          >
            <h5 className="custom-tools-row-title">
              <IoSettingsOutline />
              CMS
            </h5>
            <div className="tools-wrapper">
              {/* Magento */}
              <div className="tool-box">
                <img src={magentoLogo} alt="logo Magento " loading="lazy" />
                <small>Magento</small>
              </div>
              {/* wordpress */}
              <div className="tool-box">
                <img src={wordpressLogo} alt="logo Wordpress " loading="lazy" />
                <small>Wordpress</small>
              </div>
              {/* Prestashop */}
              <div className="tool-box">
                <img
                  src={prestashopLogo}
                  alt="logo Prestashop "
                  loading="lazy"
                />
                <small>Prestashop</small>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
};

export default Toolbox;
