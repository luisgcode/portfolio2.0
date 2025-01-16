import React, { useState } from "react";
import "./hero.css";
import { heroImage } from "../../../components/media";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation("global");
  const [animate, setAnimate] = useState(false);

  function handleLanguage(lang) {
    setAnimate(true);
    i18n.changeLanguage(lang);
    setTimeout(() => setAnimate(false), 500);
  }

  return (
    <div className="hero p-sma_pad  md:p-mid_pad  ">
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
        <div className="intro   ">
          <h1>Luis Guaiquirian</h1>
          <h2 className="text-highlightColor">{t("header.heroTitle")}</h2>
          <p className="mt-1 mb-6 max-w-[35ch]">{t("header.heroClaim")}</p>
          <div className="flex flex-wrap items-center gap-y-3 gap-x-3 max-w-96">
            <span className="custom-hero-tag text-[16px]">React JS</span>
            <span className="custom-hero-tag text-[16px]">Tailwind CSS</span>
            <span className="custom-hero-tag text-[16px] ">JavaScript</span>
            <span className="custom-hero-tag text-xs">Wordpress</span>
            <span className="custom-hero-tag text-xs">Next JS</span>
            <span className="custom-hero-tag text-xs">Python</span>
          </div>
          <div className="mt-6">
            <ul className="flex gap-6">
              <li>
                <a
                  className="hero-icon"
                  href="/Developer-Luis-Guaiquirian.pdf"
                  download="Developer-Luis-Guaiquirian.pdf"
                >
                  <BsFileEarmarkPdf /> Résumé
                </a>
              </li>
              <li>
                <a
                  className="hero-icon"
                  href="https://www.linkedin.com/in/luisgcode/"
                  target="_blank"
                >
                  <FiLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a
                  className="hero-icon"
                  href="https://github.com/luisgcode"
                  target="_blank"
                >
                  <LuGithub /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex items-center  lg:mr-16  ">
          <img className="w-[280px] " src={heroImage} alt="Luis Guaiquirian" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
