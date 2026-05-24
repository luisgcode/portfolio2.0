import React, { useState, useRef } from "react";
import { luisLogo, heroImage } from "../media";
import { AiFillSound } from "react-icons/ai";
import "./navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu, FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t, i18n } = useTranslation("global");
  const [animate, setAnimate] = useState(false);
  // Audio lives in a ref so we don't recreate it on every render.
  // It's also loaded lazily (dynamic import) the first time the user hovers
  // the logo — that keeps the 2 MB mp3 out of the initial bundle.
  const audioRef = useRef(null);

  const playSound = async () => {
    if (!audioRef.current) {
      try {
        const { default: src } = await import(
          "../../assets/audio/keyboard-audio.mp3"
        );
        audioRef.current = new Audio(src);
        audioRef.current.currentTime = 5;
        audioRef.current.volume = 0.4;
      } catch {
        return; // silently fail if audio can't load
      }
    }
    audioRef.current.play().catch(() => {
      // some browsers block autoplay; fail silently
    });
  };

  const stopSound = () => {
    audioRef.current?.pause();
  };

  const handleLanguage = (lang) => {
    setAnimate(true);
    i18n.changeLanguage(lang);
    setTimeout(() => setAnimate(false), 500);
  };

  const isEnglish = i18n.language === "en";

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
              onMouseEnter={playSound}
              onMouseLeave={stopSound}
              className="logo-image md:min-w-[65px]"
              src={luisLogo}
              alt="Luis Guaiquirian logo"
            />
          </Link>
          <AiFillSound
            aria-hidden="true"
            className="sound-icon"
          />
        </div>
        <motion.ul
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
          className="navigation-items hidden md:flex gap-8 lg:mr-24 items-center"
        >
          <li>
            <Link
              to="/"
              className={`nav-link ${animate ? "fade-in-out" : ""}`}
            >
              {t("header.navbar", { returnObjects: true })[0]}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`nav-link ${animate ? "fade-in-out" : ""}`}
            >
              {t("header.navbar", { returnObjects: true })[2]}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${animate ? "fade-in-out" : ""}`}
            >
              {t("header.navbar", { returnObjects: true })[1]}
            </Link>
          </li>
          <li className="flex">
            <button
              className="flex items-center gap-1 px-3 py-1.5 rounded-full
                 bg-gray-800/50 hover:bg-gray-700/50
                 border border-gray-700 hover:border-gray-500
                 transition-all duration-300
                 text-gray-300 text-xs"
              onClick={() => handleLanguage(isEnglish ? "sp" : "en")}
              aria-label={isEnglish ? "Switch to Spanish" : "Switch to English"}
            >
              {isEnglish ? "SPANISH" : "ENGLISH"}
            </button>
          </li>
        </motion.ul>
        <div className="navbar-mobile">
          {toggleMenu ? (
            <button
              type="button"
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
              aria-expanded={toggleMenu}
              aria-controls="mobile-menu"
              className="menu-btn mr-3"
            >
              <RiCloseLine color="#fff" size={35} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setToggleMenu(true)}
              aria-label="Open menu"
              aria-expanded={toggleMenu}
              aria-controls="mobile-menu"
              className="menu-btn mr-3"
            >
              <FiMenu color="#fff" size={35} />
            </button>
          )}

          <motion.div
            id="mobile-menu"
            className="mobile-box"
            initial={{ x: "100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            role="dialog"
            aria-label="Mobile menu"
            aria-hidden={!toggleMenu}
          >
            <div className="user">
              <img
                className="w-[150px] mb-4"
                src={heroImage}
                alt="Luis Guaiquirian"
              />
              <span className="font-semibold mb-1">Luis Guaiquirian</span>
              <span className="text-[16px] text-highlightColor">
                Web Manager &amp; Web Developer
              </span>
            </div>
            <ul className="mobile-menu">
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                >
                  <FiHome aria-hidden="true" />
                  {t("header.navbar", { returnObjects: true })[0]}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                >
                  <MdOutlineFolderCopy aria-hidden="true" />
                  {t("header.navbar", { returnObjects: true })[2]}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex gap-2 items-center"
                  onClick={() => setToggleMenu(false)}
                >
                  <FaRegUser aria-hidden="true" />
                  {t("header.navbar", { returnObjects: true })[1]}
                </Link>
              </li>
              <li className="tools flex flex-col items-start">
                <button
                  className="font-semibold text-sm"
                  onClick={() => handleLanguage(isEnglish ? "sp" : "en")}
                  aria-label={
                    isEnglish ? "Switch to Spanish" : "Switch to English"
                  }
                >
                  <span className="text-xs">
                    {isEnglish ? "SPANISH" : "ENGLISH"}
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
