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
} from "../import_data";

const Toolbox = () => {
  return (
    <div className="toolbox sec-pad">
      <div>
        <div className="toolbox-heading mb-10">
          <h3 className="heading-tertiary">
            My Toolbox.
            <span className="brush"></span>
          </h3>
          <p>
            My commitment to learning is unwavering; in this dynamic field,
            continuous education is imperative for staying relevant.
          </p>
        </div>
        <div className="toolbox-wrapp flex flex-col gap-10">
          <div className="tools-row">
            <h4 className="flex items-center gap-2">
              <MdMonitor />
              Front-end
            </h4>
            <div className="tools-icons flex flex-wrap gap-10 my-10">
              {/* React */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={reactLogo} alt="logo React " />
                <small>React JS</small>
              </div>{" "}
              {/* JS */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={jsLogo}
                  alt="logo javascript "
                />
                <small>JavaScript</small>
              </div>{" "}
              {/* Tailwind */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={tailWindLogo}
                  alt="logo javascript "
                />
                <small>Tailwind CSS</small>
              </div>{" "}
              {/* Sass */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={sassLogo}
                  alt="logo javascript "
                />
                <small>Tailwind CSS</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h4 className="flex items-center gap-2">
              <FaServer /> Back-end
            </h4>
            <div className="tools-icons flex flex-wrap gap-10 my-10">
              {/* Python */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={pythonLogo}
                  alt="logo Python "
                />
                <small>Python</small>
              </div>
              {/* php */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={phpLogo} alt="logo PHP " />
                <small>PHP</small>
              </div>
              {/* firebase */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={firebaseLogo}
                  alt="logo firebase "
                />
                <small>Firebase</small>
              </div>
              {/* Mysql */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={mySqlLogo} alt="logo MySQL " />
                <small>MySQL</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h4 className="flex items-center gap-2">
              <FaTools />
              Tools
            </h4>
            <div className="tools-icons flex flex-wrap gap-10 my-10">
              {/* Github */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={gitHubLogo}
                  alt="logo Python "
                />
                <small>GitHub</small>
              </div>
              {/* Git */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={gitLogo} alt="logo PHP " />
                <small>Git</small>
              </div>
              {/* vs code */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={firebaseLogo}
                  alt="logo firebase "
                />
                <small>VS Code</small>
              </div>
              {/* Figma */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={mySqlLogo} alt="logo MySQL " />
                <small>Figma</small>
              </div>
              {/* Notion */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={mySqlLogo} alt="logo MySQL " />
                <small>Notion</small>
              </div>
              {/* Confluence */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={mySqlLogo} alt="logo MySQL " />
                <small>Confluence</small>
              </div>
              {/* Jira */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={mySqlLogo} alt="logo MySQL " />
                <small>Jira</small>
              </div>
              {/* Slack */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={mySqlLogo} alt="logo MySQL " />
                <small>Slack</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h4 className="flex items-center gap-2">
              <MdOutlineAnalytics />
              Analytics
            </h4>
            <div className="tools-icons flex flex-wrap gap-10 my-10">
              {/* Power BI */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={gitHubLogo}
                  alt="logo Python "
                />
                <small>Power BI</small>
              </div>
              {/* GA4 */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={gitLogo} alt="logo PHP " />
                <small>GA4</small>
              </div>
              {/* Hotjar */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={firebaseLogo}
                  alt="logo firebase "
                />
                <small>Hotjar</small>
              </div>
            </div>
          </div>
          <div className="tools-row">
            <h4 className="flex items-center gap-2">
              <IoSettingsOutline />
              CMS
            </h4>
            <div className="tools-icons flex flex-wrap gap-10 my-10">
              {/* Power BI */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={gitHubLogo}
                  alt="logo Python "
                />
                <small>Power BI</small>
              </div>
              {/* GA4 */}
              <div className=" flex flex-col items-center">
                <img className="h-20 w-20" src={gitLogo} alt="logo PHP " />
                <small>GA4</small>
              </div>
              {/* Hotjar */}
              <div className=" flex flex-col items-center">
                <img
                  className="h-20 w-20"
                  src={firebaseLogo}
                  alt="logo firebase "
                />
                <small>Hotjar</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
