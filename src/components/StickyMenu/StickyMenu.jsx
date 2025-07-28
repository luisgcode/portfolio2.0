import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { luisLogo } from "../media";
import "./stickymenu.css";

const StickyMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show sticky menu after scrolling down 100px
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }

  return (
    <div className={`sticky-menu ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="sticky-menu-content">
        {/* Navigation Links */}
        <nav className="sticky-nav">
          <Link to="/" className="sticky-nav-link">
            {t("header.navbar", { returnObjects: true })[0]}
          </Link>
          <Link to="/projects" className="sticky-nav-link">
            {t("header.navbar", { returnObjects: true })[2]}
          </Link>
          <Link to="/about" className="sticky-nav-link">
            {t("header.navbar", { returnObjects: true })[1]}
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="sticky-language">
          {currentLanguage === "en" ? (
            <button
              className="language-btn"
              onClick={() => handleLanguage("sp")}
              aria-label="Switch to Spanish"
            >
              SPANISH
            </button>
          ) : (
            <button
              className="language-btn"
              onClick={() => handleLanguage("en")}
              aria-label="Switch to English"
            >
              ENGLISH
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyMenu;
