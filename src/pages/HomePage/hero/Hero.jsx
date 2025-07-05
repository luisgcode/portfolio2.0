import React, { useState } from "react";
import "./hero.css";
import { heroImage } from "../../../components/media";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  const { t, i18n } = useTranslation("global");
  const [animate, setAnimate] = useState(false);

  function handleLanguage(lang) {
    setAnimate(true);
    i18n.changeLanguage(lang);
    setTimeout(() => setAnimate(false), 500);
  }

  return (
    <div className="hero p-sma_pad  md:p-mid_pad  mt-[80px] md:mt-[0]">
      <motion.div
        variants={{
          hidden: { y: 80, opacity: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="hero-container my-6 flex justify-between      "
      >
        <div className="intro">
          <h1>Luis Guaiquirian</h1>
          <h2 className="text-highlightColor">{t("header.heroTitle")}</h2>
          <p className="mt-1 mb-6 max-w-[35ch]">{t("header.heroClaim")}</p>
          <ul
            className="flex flex-wrap items-center gap-y-3 gap-x-3 max-w-96"
            aria-label="Technogologies"
          >
            <li className="custom-hero-tag text-[16px]">Claude Code</li>
            <li className="custom-hero-tag text-[16px]">React JS</li>
            <li className="custom-hero-tag text-[16px]">Tailwind CSS</li>
            <li className="custom-hero-tag text-[16px] ">JavaScript</li>
            <li className="custom-hero-tag text-xs">Wordpress</li>
            <li className="custom-hero-tag text-xs">Figma</li>
            <span className="custom-hero-tag text-xs">Botpress</span>
          </ul>
          <div className="mt-6">
            <ul className="flex gap-6">
              <li>
                <a
                  className="hero-icon text-2xl text-gray-400"
                  href="/Developer-Luis-Guaiquirian.pdf"
                  download="Developer-Luis-Guaiquirian.pdf"
                  aria-label="Download my resume"
                >
                  <BsFileEarmarkPdf />
                </a>
              </li>
              <li>
                <a
                  className="hero-icon text-2xl text-gray-400"
                  href="mailto:contact@luisgcode.com"
                  aria-label="Get my email"
                >
                  <IoMailOutline />
                </a>
              </li>
              <li>
                <a
                  className="hero-icon text-2xl text-gray-400"
                  href="https://github.com/luisgcode"
                  target="_blank"
                  aria-label="Visit my Github profile"
                >
                  <LuGithub />
                </a>
              </li>
              <li>
                <a
                  className="hero-icon text-2xl text-gray-400"
                  href="https://www.instagram.com/luisgcoding/"
                  target="_blank"
                  aria-label="Visit my Github profile"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex items-center  lg:mr-28  ">
          <img
            className="w-[280px] "
            src={heroImage}
            alt="Portrait of Luis Guaiquirian, Front-End Developer especializado en React y JavaScript"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
