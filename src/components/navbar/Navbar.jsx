import React, { useState } from "react";
import { luisLogo } from "../media";
import { AiFillSound } from "react-icons/ai";
import "./navbar.css";
import sound from "../../assets/audio/keyboard-audio.mp3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";

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

  // Estado para manejar el idioma actual
  const [currentLanguage, setCurrentLanguage] = useState("en"); // El idioma por defecto es inglés

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
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <motion.ul
          variants={{
            hidden: { x: 80, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="navigation-items hidden md:flex gap-12  "
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
              {/* <span id="dark">
               <FaRegMoon /> 
              </span> */}
            </button>
            {/* Botones de idioma */}
            {currentLanguage === "en" ? (
              <button
                className="font-semibold text-sm"
                id="lan-sp"
                onClick={() => {
                  handleLanguage("sp");
                  setCurrentLanguage("sp");
                }}
              >
                SP
              </button>
            ) : (
              <button
                id="lan-en"
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
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu2Line
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="mobile-box">
              <ul className="mobile-menu">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/projects">
                  <li>Projects</li>
                </Link>
                <li>Contact</li>
                <li className="flex gap-2">
                  <button>
                    <span className="text-sm" id="light">
                      <FaMoon />
                    </span>
                    {/* <span id="dark">
               <FaRegMoon /> 
              </span> */}
                  </button>
                  {/* Botones de idioma */}
                  {currentLanguage === "en" ? (
                    <button
                      className="font-semibold text-sm"
                      id="lan-sp"
                      onClick={() => {
                        handleLanguage("sp");
                        setCurrentLanguage("sp");
                      }}
                    >
                      SP
                    </button>
                  ) : (
                    <button
                      id="lan-en"
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
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
