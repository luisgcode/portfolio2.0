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
} from "../../../components/media";

const Toolbox = () => {
  const { t } = useTranslation("global");
  return (
    <div className="toolbox px-8 py-6 md:p-mid_pad mt-20 md:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="toolbox-heading mb-6">
          <h3>
            My Toolbox.
            <span className="detail-bg"></span>
          </h3>
          <p>
            My commitment to learning is unwavering; in this dynamic field,
            continuous education is imperative for staying relevant.
          </p>
        </div>
        <div className="toolbox-wrapp flex flex-col gap-3 md:gap-0 ">
          <div className="tools-row  ">
            <h5 className="custom-tools-row-title">
              <MdMonitor />
              Front-end
            </h5>
            <div className="tools-wrapper">
              {/* React */}
              <div className="tool-box">
                <img src={reactLogo} alt="logo React " />
                <small>React JS</small>
              </div>
              {/* JS */}
              <div className="tool-box">
                <img src={jsLogo} alt="logo javascript " />
                <small>JavaScript</small>
              </div>
              {/* Tailwind */}
              <div className="tool-box">
                <img src={tailWindLogo} alt="logo javascript " />
                <small>Tailwind CSS</small>
              </div>
              {/* Sass */}
              <div className="tool-box">
                <img src={sassLogo} alt="logo javascript " />
                <small>Sass</small>
              </div>
            </div>
          </div>
          <div className="tools-row  ">
            <h5 className="custom-tools-row-title">
              <FaServer /> Back-end
            </h5>
            <div className="tools-wrapper">
              {/* Python */}
              <div className="tool-box">
                <img src={pythonLogo} alt="logo Python " />
                <small>Python</small>
              </div>
              {/* php */}
              <div className="tool-box">
                <img src={phpLogo} alt="logo PHP " />
                <small>PHP</small>
              </div>
              {/* firebase */}
              <div className="tool-box">
                <img src={firebaseLogo} alt="logo firebase " />
                <small>Firebase</small>
              </div>
              {/* Mysql */}
              <div className="tool-box">
                <img src={mySqlLogo} alt="logo MySQL " />
                <small>MySQL</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h5 className="custom-tools-row-title">
              <FaTools />
              Development & Collaboration
            </h5>
            <div className="tools-wrapper">
              {/* Github */}
              <div className="tool-box">
                <img src={gitHubLogo} alt="logo GitHub " />
                <small>GitHub</small>
              </div>
              {/* Git */}
              <div className="tool-box">
                <img src={gitLogo} alt="logo Git " />
                <small>Git</small>
              </div>
              {/* vs code */}
              <div className="tool-box">
                <img src={vsCodeLogo} alt="logo VS Code " />
                <small>VS Code</small>
              </div>
              {/* Figma */}
              <div className="tool-box">
                <img src={figmaLogo} alt="logo Figma " />
                <small>Figma</small>
              </div>
              {/* Notion */}
              <div className="tool-box">
                <img src={notionLogo} alt="logo Notion " />
                <small>Notion</small>
              </div>
              {/* Confluence */}
              <div className="tool-box">
                <img src={confluenceLogo} alt="logo Confluence " />
                <small>Confluence</small>
              </div>
              {/* Jira */}
              <div className="tool-box">
                <img src={jiraLogo} alt="logo Jira " />
                <small>Jira</small>
              </div>
              {/* Slack */}
              <div className="tool-box">
                <img src={slackLogo} alt="logo Slack " />
                <small>Slack</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h5 className="custom-tools-row-title">
              <MdOutlineAnalytics />
              Analytics
            </h5>
            <div className="tools-wrapper">
              {/* Power BI */}
              <div className="tool-box">
                <img src={powerBiLogo} alt="logo Power BI" />
                <small>Power BI</small>
              </div>
              {/* GA4 */}
              <div className="tool-box">
                <img src={ga4Logo} alt="logo GA4 " />
                <small>GA4</small>
              </div>
              {/* Hotjar */}
              <div className="tool-box">
                <img src={hotjarLogo} alt="logo Hotjar " />
                <small>Hotjar</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h5 className="custom-tools-row-title">
              <IoSettingsOutline />
              CMS
            </h5>
            <div className="tools-wrapper">
              {/* Magento */}
              <div className="tool-box">
                <img src={magentoLogo} alt="logo Magento " />
                <small>Magento</small>
              </div>
              {/* wordpress */}
              <div className="tool-box">
                <img src={wordpressLogo} alt="logo Wordpress " />
                <small>Wordpress</small>
              </div>
              {/* Prestashop */}
              <div className="tool-box">
                <img src={prestashopLogo} alt="logo Prestashop " />
                <small>Prestashop</small>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Toolbox;
