import React from "react";
import "./about.css";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("global");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <div className="about p-sma_pad md:p-mid_pad">
        <div className="box flex flex-col gap-20 lg:flex-row">
          <motion.div
            variants={{
              hidden: { x: -80, opacity: 0 },
              show: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className=" flex flex-wrap text[16px] gap-4 lg:w-1/2"
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <div className="mt-4">
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
          </motion.div>
          <div className=" flex flex-col gap-10 lg:w-1/2">
            <motion.div
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="formal text-sm"
            >
              <h5 className="mb-3 text-highlightColor">Formal education</h5>
              <li className="my-2">
                Fanshawe College.
                <span className="flex gap-2">
                  <AiOutlineLoading3Quarters />
                  Web Development and Internet Applications Diploma. (Apr 2025)
                </span>
              </li>
              <li className="my-2">
                University Institute of Industrial Management.
                <span className="flex gap-2">
                  <FaCheckCircle />
                  Business Administration Associate's Degree.
                </span>
              </li>
            </motion.div>
            <motion.div
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
              className="online text-sm "
            >
              <h5 className="mb-3 text-highlightColor">
                Relevant online courses taken
              </h5>
              <li className="flex justify-start gap-2 mb-2">
                <AiOutlineLoading3Quarters />
                Harvard University. CS50's Programming with Python.
              </li>{" "}
              <li className="flex justify-start gap-2 mb-2">
                <AiOutlineLoading3Quarters />
                Udeymy: LLM Engineering: Master AI, Large Language Models - Ed
                D.
              </li>
              <li className="flex justify-start gap-2 mb-2">
                <FaCheckCircle />
                Udemy: 50 JS Projects in 50 Days - Brad T.
              </li>
              <li className="flex justify-start gap-2 mb-2">
                <FaCheckCircle />
                Udemy: Complete Web Development Bootcamp - Angela Y.
              </li>
              <li className="flex justify-start gap-2 mb-2">
                <FaCheckCircle />
                Udemy: Complete JavaScript Course 2025 - Jonas S .
              </li>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
