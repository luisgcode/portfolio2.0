import React, { useState } from "react";
import { luisLogo, heroImage } from "../media";
import { AiFillSound } from "react-icons/ai";
import "./navbar.css";
import sound from "../../assets/audio/keyboard-audio.mp3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t, i18n } = useTranslation("global");
  const [animate, setAnimate] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const audio = new Audio(sound);
  audio.currentTime = 5;
  audio.volume = 0.4;

  function play() {
    audio.play();
  }

  function stop() {
    audio.pause();
  }

  function handleLanguage(lang) {
    setAnimate(true);
    i18n.changeLanguage(lang);
    setTimeout(() => setAnimate(false), 500);
  }

  return (
    <div className="navbar mb-10 md:mb-0">
      <div className="p-sma_pad navigation flex items-center justify-between md:p-mid_pad">
        <div className="navigation-logo cursor-pointer relative">
          <Link to="/">
            <li>
              <a>
                <img
                  onMouseEnter={play}
                  onMouseOut={stop}
                  className="logo-image md:min-w-[65px]"
                  src={luisLogo}
                  alt="My portfolio's logo"
                />
              </a>
            </li>
          </Link>
          <AiFillSound className="sound-icon" />
        </div>
        <motion.ul
          variants={{
            hidden: { x: 80, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          initial="hidden"
          animate="show"
          className="navigation-items hidden md:flex gap-8 lg:mr-24"
        >
          <Link to="/">
            <li>
              <a className={`nav-link ${animate ? "fade-in-out" : ""}`}>
                {t("header.navbar", { returnObjects: true })[0]}
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a className={`nav-link ${animate ? "fade-in-out" : ""}`}>
                {t("header.navbar", { returnObjects: true })[1]}
              </a>
            </li>
          </Link>
          <Link to="/projects">
            <li>
              <a className={`nav-link ${animate ? "fade-in-out" : ""}`}>
                {t("header.navbar", { returnObjects: true })[2]}
              </a>
            </li>
          </Link>

          <li className="flex gap-2">
            {currentLanguage === "en" ? (
              <button
                className="font-semibold text-sm"
                onClick={() => {
                  handleLanguage("sp");
                  setCurrentLanguage("sp");
                }}
              >
                SPA
              </button>
            ) : (
              <button
                className="font-semibold text-sm"
                onClick={() => {
                  handleLanguage("en");
                  setCurrentLanguage("en");
                }}
              >
                ENG
              </button>
            )}
          </li>
        </motion.ul>
        <div className="navbar-mobile">
          {toggleMenu ? (
            <RiCloseLine
              className="menu-btn mr-3"
              color="#fff"
              size={35}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FiMenu
              className="menu-btn mr-3"
              color="#fff"
              size={35}
              onClick={() => setToggleMenu(true)}
            />
          )}
          <motion.div
            className="mobile-box"
            initial={{ x: "100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="user">
              <img
                className="w-[150px] mb-4"
                src={heroImage}
                alt="Luis Guaiquirian"
              />
              <span className="font-semibold mb-1">Luis Guaiquirian</span>
              <span className="text-[16px] text-highlightColor">
                Web Developer
              </span>
            </div>
            <ul className="mobile-menu">
              <Link to="/">
                <li
                  className="flex gap-2   items-center  "
                  onClick={() => setToggleMenu(false)}
                >
                  <FiHome />

                  {t("header.navbar", { returnObjects: true })[0]}
                </li>
              </Link>
              <Link to="/about">
                <li
                  className="flex gap-2   items-center  "
                  onClick={() => setToggleMenu(false)}
                >
                  <FaRegUser />

                  {t("header.navbar", { returnObjects: true })[1]}
                </li>
              </Link>
              <Link to="/projects">
                <li
                  className="flex gap-2   items-center  "
                  onClick={() => setToggleMenu(false)}
                >
                  <MdOutlineFolderCopy />

                  {t("header.navbar", { returnObjects: true })[2]}
                </li>
              </Link>

              <li className="tools flex flex-col items-start  ">
                {currentLanguage === "en" ? (
                  <button
                    className="font-semibold text-sm"
                    onClick={() => {
                      handleLanguage("sp");
                      setCurrentLanguage("sp");
                    }}
                  >
                    {" "}
                    <span className="text-xs"> Language:</span> SPA
                  </button>
                ) : (
                  <button
                    className="font-semibold text-sm"
                    onClick={() => {
                      handleLanguage("en");
                      setCurrentLanguage("en");
                    }}
                  >
                    <span className="text-xs"> Language:</span> ENG
                  </button>
                )}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
