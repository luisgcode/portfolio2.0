import React from "react";
import { motion } from "framer-motion";
import "./behind.css";
import { useTranslation } from "react-i18next";

const Behind = () => {
  const { t, i18n } = useTranslation("global");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <section
      aria-label="statistics"
      className="behind text-center mt-12 overflow-y-hidden hidden md:flex px-8"
    >
      <motion.ul
        variants={{
          hidden: { y: 80 },
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
        className="w-full flex justify-center items-center my-6 gap-10 text-white"
        aria-label="key statistics"
      >
        <li className="custom-bullets " role="status">
          3
          <span className="text-base font-normal">
            {t("behindSection.years")}
          </span>
        </li>
        |
        <li className="custom-bullets" role="status">
          10+
          <span className="text-base font-normal">
            {t("behindSection.skills")}
          </span>
        </li>
        |
        <li className="custom-bullets" role="status">
          12000+
          <span className="text-base font-normal  ">
            {t("behindSection.hours")}
          </span>
        </li>
      </motion.ul>
    </section>
  );
};

export default Behind;
