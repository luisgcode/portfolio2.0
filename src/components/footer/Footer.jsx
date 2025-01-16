import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <div className="footer flex justify-center items-center flex-col pt-16 pb-8 gap-4">
      <div className="flex justify-center items-center ">
        <ul className="flex gap-6">
          <li>
            <a
              className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
              href="/portfolio2.0/cv_developer_luis.pdf"
              download="luis_summary.pdf"
            >
              <BsFileEarmarkPdf />
            </a>
          </li>
          <li>
            <a
              className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
              href="https://www.linkedin.com/in/luisgcode/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
              href="https://github.com/luisgcode"
              target="_blank"
            >
              <LuGithub />
            </a>
          </li>
        </ul>
      </div>
      <small> Luis Guaiquirian @ 2025</small>
    </div>
  );
};

export default Footer;
