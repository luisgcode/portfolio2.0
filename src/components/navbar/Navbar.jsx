import React, { useState } from "react";
import { luisLogo } from "../media";
import { AiFillSound } from "react-icons/ai";
import "./navbar.css";
import sound from "../../assets/audio/keyboard-audio.mp3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t, i18n } = useTranslation("global");
  const [animate, setAnimate] = useState(false);

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
    setAnimate(true); // Activar la animación
    i18n.changeLanguage(lang); // Cambiar el idioma
    setTimeout(() => setAnimate(false), 500); // Desactivar la animación después de 500ms
  }

  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <div className="navbar">
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
          className="navigation-items hidden md:flex gap-12"
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
          <li>
            <a className="nav-link">Contact</a>
          </li>
          <li className="flex gap-2">
            <button>
              <span className="text-sm" id="light">
                <FaMoon />
              </span>
            </button>
            {currentLanguage === "en" ? (
              <button
                className="font-semibold text-sm"
                onClick={() => {
                  handleLanguage("sp");
                  setCurrentLanguage("sp");
                }}
              >
                SP
              </button>
            ) : (
              <button
                className="font-semibold text-sm"
                onClick={() => {
                  handleLanguage("en");
                  setCurrentLanguage("en");
                }}
              >
                EN
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
            <RiMenu2Line
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
            <ul className="mobile-menu">
              <Link to="/">
                <li onClick={() => setToggleMenu(false)}>
                  {t("header.navbar", { returnObjects: true })[0]}
                </li>
              </Link>
              <Link to="/about">
                <li onClick={() => setToggleMenu(false)}>
                  {t("header.navbar", { returnObjects: true })[1]}
                </li>
              </Link>
              <Link to="/projects">
                <li onClick={() => setToggleMenu(false)}>
                  {t("header.navbar", { returnObjects: true })[2]}
                </li>
              </Link>
              <li onClick={() => setToggleMenu(false)}>
                {t("header.navbar", { returnObjects: true })[3]}
              </li>
              <li className="flex gap-2">
                <button>
                  <span className="text-sm" id="light">
                    <FaMoon />
                  </span>
                </button>
                {currentLanguage === "en" ? (
                  <button
                    className="font-semibold text-sm"
                    onClick={() => {
                      handleLanguage("sp");
                      setCurrentLanguage("sp");
                    }}
                  >
                    SP
                  </button>
                ) : (
                  <button
                    className="font-semibold text-sm"
                    onClick={() => {
                      handleLanguage("en");
                      setCurrentLanguage("en");
                    }}
                  >
                    EN
                  </button>
                )}
              </li>
              <ul className="flex gap-6">
                <li>
                  <a
                    className="hero-icon text-xs"
                    href="/Developer-Luis-Guaiquirian.pdf"
                    download="Developer-Luis-Guaiquirian.pdf"
                  >
                    <BsFileEarmarkPdf /> Résumé
                  </a>
                </li>
                <li>
                  <a
                    className="hero-icon text-xs"
                    href="https://www.linkedin.com/in/luisgcode/"
                    target="_blank"
                  >
                    <FiLinkedin /> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="hero-icon text-xs"
                    href="https://github.com/luisgcode"
                    target="_blank"
                  >
                    <LuGithub /> Github
                  </a>
                </li>
              </ul>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
