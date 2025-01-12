import React from "react";

import "./toolbox.css";
import { MdMonitor } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import {
  bootstrapLogo,
  cssLogo,
  figmaLogo,
  fileZileaLogo,
  firebaseLogo,
  ga4Logo,
  postgrSQLogo,
  powerBiLogo,
  pythonLogo,
  reactLogo,
  sassLogo,
  slackLogo,
  tailWindLogo,
  typescriptlogo,
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
} from "../media";

const Toolbox = () => {
  return (
    <div className="toolbox px-8 py-6 md:p-mid_pad mt-20 md:mt-0">
      <div>
        <div className="toolbox-heading mb-6">
          <h3 className="heading-tertiary">
            My Toolbox.
            <span className="brush"></span>
          </h3>
          <p>
            My commitment to learning is unwavering; in this dynamic field,
            continuous education is imperative for staying relevant.
          </p>
        </div>
        <div className="toolbox-wrapp flex flex-col gap-3 md:gap-0 ">
          <div className="tools-row  ">
            <h5 className="flex items-center gap-2">
              <MdMonitor />
              Front-end
            </h5>
            <div className="tools-icons flex flex-wrap gap-8 mt-6">
              {/* React */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={reactLogo} alt="logo React " />
                <small>React JS</small>
              </div>{" "}
              {/* JS */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={jsLogo}
                  alt="logo javascript "
                />
                <small>JavaScript</small>
              </div>{" "}
              {/* Tailwind */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={tailWindLogo}
                  alt="logo javascript "
                />
                <small>Tailwind CSS</small>
              </div>{" "}
              {/* Sass */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={sassLogo}
                  alt="logo javascript "
                />
                <small>Sass</small>
              </div>
            </div>
          </div>
          <div className="tools-row  ">
            <h5 className="flex items-center gap-2">
              <FaServer /> Back-end
            </h5>
            <div className="tools-icons flex flex-wrap gap-8 mt-6">
              {/* Python */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={pythonLogo}
                  alt="logo Python "
                />
                <small>Python</small>
              </div>
              {/* php */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={phpLogo} alt="logo PHP " />
                <small>PHP</small>
              </div>
              {/* firebase */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={firebaseLogo}
                  alt="logo firebase "
                />
                <small>Firebase</small>
              </div>
              {/* Mysql */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={mySqlLogo} alt="logo MySQL " />
                <small>MySQL</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h5 className="flex items-center gap-2">
              <FaTools />
              Development & Collaboration
            </h5>
            <div className="tools-icons flex flex-wrap gap-8 mt-6">
              {/* Github */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={gitHubLogo}
                  alt="logo GitHub "
                />
                <small>GitHub</small>
              </div>
              {/* Git */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={gitLogo} alt="logo Git " />
                <small>Git</small>
              </div>
              {/* vs code */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={vsCodeLogo}
                  alt="logo VS Code "
                />
                <small>VS Code</small>
              </div>
              {/* Figma */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={figmaLogo} alt="logo Figma " />
                <small>Figma</small>
              </div>
              {/* Notion */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={notionLogo}
                  alt="logo Notion "
                />
                <small>Notion</small>
              </div>
              {/* Confluence */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={confluenceLogo}
                  alt="logo Confluence "
                />
                <small>Confluence</small>
              </div>
              {/* Jira */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={jiraLogo} alt="logo Jira " />
                <small>Jira</small>
              </div>
              {/* Slack */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={slackLogo} alt="logo Slack " />
                <small>Slack</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h5 className="flex items-center gap-2">
              <MdOutlineAnalytics />
              Analytics
            </h5>
            <div className="tools-icons flex flex-wrap gap-8 mt-6">
              {/* Power BI */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={powerBiLogo}
                  alt="logo Power BI"
                />
                <small>Power BI</small>
              </div>
              {/* GA4 */}
              <div className=" flex flex-col items-center">
                <img className="h-10 w-10" src={ga4Logo} alt="logo GA4 " />
                <small>GA4</small>
              </div>
              {/* Hotjar */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={hotjarLogo}
                  alt="logo Hotjar "
                />
                <small>Hotjar</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h5 className="flex items-center gap-2">
              <IoSettingsOutline />
              CMS
            </h5>
            <div className="tools-icons flex flex-wrap gap-8 mt-6">
              {/* Magento */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={magentoLogo}
                  alt="logo Magento "
                />
                <small>Magento</small>
              </div>
              {/* wordpress */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={wordpressLogo}
                  alt="logo Wordpress "
                />
                <small>Wordpress</small>
              </div>
              {/* Prestashop */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-10 w-10"
                  src={prestashopLogo}
                  alt="logo Prestashop "
                />
                <small>Prestashop</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
