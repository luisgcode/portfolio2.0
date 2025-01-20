import React from "react";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer flex justify-center items-center flex-col pt-16 pb-8 gap-4">
      <div className="flex justify-center items-center ">
        <ul className="flex gap-6">
          <li>
            <a
              className="flex gap-1 text-1xl hover:scale-110 transition-scale duration-100"
              href="/Developer-Luis-Guaiquirian.pdf"
              download="Developer-Luis-Guaiquirian.pdf"
            >
              <BsFileEarmarkPdf />
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
      <a href="mailto:contact@luisgcode.com">contact@luisgcode.com</a>
    </div>
  );
};

export default Footer;
