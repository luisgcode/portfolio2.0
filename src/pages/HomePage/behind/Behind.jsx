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
    <div className="behind text-center mt-12 overflow-y-hidden hidden md:flex px-8">
      <motion.div
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
      >
        <div className="custom-bullets ">
          2
          <span className="text-base font-normal">
            {t("behindSection.years")}
          </span>
        </div>
        |
        <div className="custom-bullets">
          10+
          <span className="text-base font-normal">
            {t("behindSection.skills")}
          </span>
        </div>
        |
        <div className="custom-bullets">
          12000+{" "}
          <span className="text-base font-normal  ">
            {t("behindSection.hours")}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Behind;
