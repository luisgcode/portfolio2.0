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
import { MdLanguage } from "react-icons/md";

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
    <nav
      className="navbar mb-10 md:mb-0"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="p-sma_pad navigation flex items-center justify-between md:p-mid_pad">
        <div className="navigation-logo relative">
          <Link to="/" aria-label="Home">
            <img
              onMouseEnter={play}
              onMouseOut={stop}
              className="logo-image md:min-w-[65px]"
              src={luisLogo}
              alt="Luis Guaiquirian Portfolio"
            />
          </Link>
          <AiFillSound
            aria-label="Sound button activates on logo"
            className="sound-icon"
          />
        </div>
        <motion.ul
          role="menubar"
          aria-label="Main menu"
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
          className="navigation-items hidden md:flex gap-8 lg:mr-24  items-center"
        >
          <Link to="/projects">
            <li role="menuitem">
              {/* Agregar role menuitem */}
              <a
                className={`font-bold nav-link ${animate ? "fade-in-out" : ""}`}
              >
                {t("header.navbar", { returnObjects: true })[2]}
              </a>
            </li>
          </Link>
          <Link to="/">
            <li role="menuitem">
              {/* Agregar role menuitem */}
              <a className={`nav-link ${animate ? "fade-in-out" : ""}`}>
                {t("header.navbar", { returnObjects: true })[0]}
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li role="menuitem">
              {/* Agregar role menuitem */}
              <a className={`nav-link ${animate ? "fade-in-out" : ""}`}>
                {t("header.navbar", { returnObjects: true })[1]}
              </a>
            </li>
          </Link>

          <Link to="/resources">
            <li role="menuitem">
              {/* enter to resources */}
              <a className={`flex nav-link ${animate ? "fade-in-out" : ""}`}>
                {t("header.navbar", { returnObjects: true })[3]}
              </a>
            </li>
          </Link>

          <li className="flex">
            {currentLanguage === "en" ? (
              <button
                className=" flex items-center gap-1 px-3 py-1.5 rounded-full 
                 bg-gray-800/50 hover:bg-gray-700/50 
                 border border-gray-700 hover:border-gray-500
                 transition-all duration-300
                 text-gray-300  text-xs"
                onClick={() => {
                  handleLanguage("sp");
                  setCurrentLanguage("sp");
                }}
                aria-label="Switch to Spanish"
              >
                <MdLanguage />
                SPA
              </button>
            ) : (
              <button
                className=" flex items-center gap-1 px-3 py-1.5 rounded-full 
              bg-gray-800/50 hover:bg-gray-700/50 
              border border-gray-700 hover:border-gray-500
              transition-all duration-300
         text-gray-300  text-xs"
                onClick={() => {
                  handleLanguage("en");
                  setCurrentLanguage("en");
                }}
                aria-label="Switch to English"
              >
                <MdLanguage />
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
              aria-label="Close menu"
              aria-expanded={toggleMenu} // Agregado para mostrar si el menú está abierto
            />
          ) : (
            <FiMenu
              className="menu-btn mr-3"
              color="#fff"
              size={35}
              onClick={() => setToggleMenu(true)}
              aria-label="Open menu"
              aria-expanded={toggleMenu} // Agregado para mostrar si el menú está cerrado
            />
          )}

          <motion.div
            id="mobile-menu"
            className="mobile-box"
            initial={{ x: "100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            role="dialog" // Añadido para indicar que es un diálogo/modal
            aria-label="Mobile menu"
            aria-hidden={!toggleMenu} // Cambiar a "true" cuando el menú esté cerrado
          >
            {/* Contenido del menú */}
            <div className="user" role="banner">
              <img
                className="w-[150px] mb-4"
                src={heroImage}
                alt="Luis Guaiquirian"
              />
              <span className="font-semibold mb-1" aria-label="Name">
                Luis Guaiquirian
              </span>
              <span
                className="text-[16px] text-highlightColor"
                aria-label="Role"
              >
                Web Developer
              </span>
            </div>
            <ul className="mobile-menu">
              <Link to="/">
                <li
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                  role="menuitem" // Añadir el role a cada ítem
                >
                  <FiHome />
                  {t("header.navbar", { returnObjects: true })[0]}
                </li>
              </Link>
              <Link to="/about">
                <li
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                  role="menuitem"
                >
                  <FaRegUser />
                  {t("header.navbar", { returnObjects: true })[1]}
                </li>
              </Link>
              <Link to="/projects">
                <li
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                  role="menuitem"
                >
                  <MdOutlineFolderCopy />
                  {t("header.navbar", { returnObjects: true })[2]}
                </li>
              </Link>

              <Link to="/resources">
                <li
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                  role="menuitem"
                >
                  {t("header.navbar", { returnObjects: true })[3]}
                </li>
              </Link>
              {/* Language Switch */}
              <li className="tools flex flex-col items-start">
                {currentLanguage === "en" ? (
                  <button
                    className="font-semibold text-sm"
                    onClick={() => {
                      handleLanguage("sp");
                      setCurrentLanguage("sp");
                    }}
                  >
                    <span className="text-xs">Language:</span> SPA
                  </button>
                ) : (
                  <button
                    className="font-semibold text-sm"
                    onClick={() => {
                      handleLanguage("en");
                      setCurrentLanguage("en");
                    }}
                  >
                    <span className="text-xs">Language:</span> ENG
                  </button>
                )}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
