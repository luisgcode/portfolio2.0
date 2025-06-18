import React from "react";
import "./table.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TableList = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <div className="p-sma_pad md:p-mid_pad">
        <table className="table">
          {/* Table heading */}
          <thead className="text-left">
            <tr>
              <th scope="col" className=" ">
                Date
              </th>
              <th scope="col" className=" ">
                Projects
              </th>
              <th scope="col" className="hidden xl:table-cell   ">
                Features & Tech Stack
              </th>
              <th scope="col" className="hidden  xxl:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Resources Page */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>Jun/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Resources $ page on Portfolio - &nbsp;{" "}
                  <span className="italic text-highlightColor font-normal">
                    Developing...
                  </span>
                </div>
                <div className=" xxl:hidden ">
                  <a href="#" className="flex gap-1">
                    Resources $ page on Portfolio{" "}
                    <span className="italic text-highlightColor font-normal">
                      Developing...
                    </span>
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td hidden xl:flex  ">
                <span className="custom-project-tag">Buymeacoffe</span>
                <span className="custom-project-tag">Semantic HTML</span>
                <span className="custom-project-tag">
                  Web Content Accessibility Guidelines
                </span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://luisgcode.com/resources"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                >
                  luisgcode.com <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>

            {/* Geek sonas */}
            <motion.tr
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
            >
              {/* Year */}
              <td>May/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Geeksonas - &nbsp;
                  <span className="italic text-highlightColor font-normal">
                    Developing...
                  </span>
                </div>
                <div className=" xxl:hidden ">
                  <a href="#" className="flex gap-1">
                    Geeksonas
                    <span className="italic text-highlightColor font-normal">
                      Developing...
                    </span>
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td hidden xl:flex  ">
                <span className="custom-project-tag">Wordpress</span>
                <span className="custom-project-tag">Elementor </span>
                <span className="custom-project-tag">Yoast SEO</span>
                <span className="custom-project-tag">Hostinger</span>
                <span className="custom-project-tag">SEO</span>
                <span className="custom-project-tag">Figma</span>
                <span className="custom-project-tag">Photoshop</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="#"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                >
                  WordPress Development
                </a>
              </td>
            </motion.tr>

            {/* Neurovet */}
            <motion.tr
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
            >
              {/* Year */}
              <td>May/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Neurovet.cl - &nbsp;
                  <span className="italic text-highlightColor font-normal">
                    Developing...
                  </span>
                </div>
                <div className=" xxl:hidden ">
                  <a href="#" className="flex gap-1">
                    Neurovet.cl
                    <span className="italic text-highlightColor font-normal">
                      Developing...
                    </span>
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td hidden xl:flex  ">
                <span className="custom-project-tag">Wordpress</span>
                <span className="custom-project-tag">Elementor </span>
                <span className="custom-project-tag">Yoast SEO</span>
                <span className="custom-project-tag">Bookly</span>
                <span className="custom-project-tag">Hostinger</span>
                <span className="custom-project-tag">SEO</span>
                <span className="custom-project-tag">Figma</span>
                <span className="custom-project-tag">Photoshop</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="#"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                >
                  WordPress Development
                </a>
              </td>
            </motion.tr>

            {/* Thevocaldirection */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>Mar/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  {/* Desktop name */}
                  The Vocal Direction (Heidi Weinrib)
                </div>
                <div className="xxl:hidden">
                  <a
                    href="https://thevocaldirection.com"
                    className="flex gap-1"
                  >
                    {/* Mobile name */}
                    TheVocalDirection
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td   xl:flex hidden">
                <span className="custom-project-tag">Wordpress</span>
                <span className="custom-project-tag">Mail Configuration</span>
                <span className="custom-project-tag">Elementor</span>
                <span className="custom-project-tag">CSS</span>
                <span className="custom-project-tag">Contact Form 7</span>
                <span className="custom-project-tag">Hostinger</span>
                <span className="custom-project-tag">SEO</span>
                <span className="custom-project-tag">Figma</span>
                <span className="custom-project-tag">Photoshop</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://thevocaldirection.com/"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                >
                  thevocaldirection.com <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>

            {/* Wawabb */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.4,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>Mar/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  {/* Desktop name */}
                  Wawabb - Bsale Store Optimization
                </div>
                <div className="xxl:hidden">
                  <a
                    href="https://www.wawabb.cl/"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit Global Technologies website"
                  >
                    {/* Mobile name */}
                    Wawabb.cl -
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td   xl:flex hidden">
                <span className="custom-project-tag">CMS Optimization</span>
                <span className="custom-project-tag">Bsale POS</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">CSS</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://www.wawabb.cl/"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit Global Technologies website"
                >
                  wawabb.cl <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>

            {/* Chatbot */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>Feb/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Portfolio AI Chatbot Integration
                </div>
                <div className=" xxl:hidden ">
                  <a href="#" className="flex gap-1">
                    Portfolio AI Chatbot Integration
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td hidden xl:flex  ">
                <span className="custom-project-tag">Botpress</span>
                <span className="custom-project-tag">AI Design</span>
                <span className="custom-project-tag">Data Storage</span>
                <span className="custom-project-tag">Knowledge Answering</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="#"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                >
                  luisgcode.com <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>

            {/* QuickBooker */}
            {/* <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.4,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            > */}
            {/* Year */}
            {/* <td>2025</td> */}
            {/* Project */}
            {/* <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  QuickBooker - &nbsp;
                  <span className="italic text-highlightColor font-normal">
                    Developing...
                  </span>
                </div>
                <div className=" xxl:hidden ">
                  <a
                    href="https://github.com/luisgcode/Quickbooker"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit QuickBooker Github repository"
                  >
                    QuickBooker
                    <span className="italic text-highlightColor font-normal">
                      Developing...
                    </span>
                    <FiArrowUpRight />
                  </a>
                </div>
              </td> */}
            {/* Tags */}
            {/* <td className="tags-td hidden xl:flex  ">
                <span className="custom-project-tag">React JS</span>
                <span className="custom-project-tag">Tailwind CSS</span>
                <span className="custom-project-tag">Responsive </span>
                <span className="custom-project-tag">Jira </span>
                <span className="custom-project-tag">Notion </span>
                <span className="custom-project-tag">Figma </span>
                <span className="custom-project-tag">Node JS </span>
                <span className="custom-project-tag">MySQL </span>
                <span className="custom-project-tag">Trilingual </span>
              </td> */}
            {/* link */}
            {/* <td className="link hidden xxl:table-cell">
                <a
                  href="https://github.com/luisgcode/Quickbooker"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit QuickBooker Github repository"
                >
                  GitHub
                  <FaGithub />
                </a>
              </td> */}
            {/* </motion.tr> */}

            {/* portfolio v2 */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.6,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>Jan/2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">Portfolio (v2)</div>
                <div className=" xxl:hidden ">
                  <a
                    href="https://www.luisgcode.com/"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit my porfolio v2 github repository"
                  >
                    Portfolio (v2) <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td hidden xl:flex  ">
                <span className="custom-project-tag">React JS</span>
                <span className="custom-project-tag bg-red-300">
                  Tailwind CSS
                </span>
                <span className="custom-project-tag">Framer Motion</span>
                <span className="custom-project-tag">i18next </span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">SPA</span>
                <span className="custom-project-tag">Bilingual</span>
                <span className="custom-project-tag">Hostinger</span>
                <span className="custom-project-tag">GA4</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://www.luisgcode.com/"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit my porfolio v2 github repository"
                >
                  luisgcode.com <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>
            {/* Global Technologies */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.7,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Global Technologies - Optimization & Functionalities
                </div>
                <div className="xxl:hidden">
                  <a
                    href="https://globaltechnologies.web.app/"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit Global Technologies website"
                  >
                    globaltechnologies.web.app <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td   xl:flex hidden">
                <span className="custom-project-tag">TypeScript</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://globaltechnologies.web.app/"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit Global Technologies website"
                >
                  globaltechnologies.web.app <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>
            {/* Can jet Pattern Library & Dashboard */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.8,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Can Jet Pattern Library & Dashboard
                </div>
                <div className="xxl:hidden">
                  <a
                    href="https://github.com/luisgcode/pattern_library_canJet"
                    target="_blank"
                    className="flex gap-1 "
                    aria-label="Visit Can jet Pattern Library & Dashboard Github repository"
                  >
                    Can Jet Pattern Library & Dashboard
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td   xl:flex hidden">
                <span className="custom-project-tag">D3.js</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">CSS</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://github.com/luisgcode/pattern_library_canJet"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit Can jet Pattern Library & Dashboard Github repository"
                >
                  GitHub
                  <FaGithub />
                </a>
              </td>
            </motion.tr>
            {/* Portfolio v1 */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.9,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">Portfolio (v1)</div>
                <div className="xxl:hidden">
                  <a
                    href="https://github.com/luisgcode/portfolio2024"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit my portfolio v1 Github repository"
                  >
                    Portfolio (v1)
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td  hidden xl:flex">
                <span className="custom-project-tag">Sass</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">Bilingual</span>
                <span className="custom-project-tag">Accessible</span>
                <span className="custom-project-tag">Hostinger</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://github.com/luisgcode/portfolio2024"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit my portfolio v1 Github repository"
                >
                  GitHub
                  <FaGithub />
                </a>
              </td>
            </motion.tr>
            {/* RBC place Hub */}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  RBC Place - Information HUB
                </div>
                <div className="xxl:hidden">
                  <a
                    href="https://www.rbcplacelondon.com/"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit RBC Place London Github repository"
                  >
                    rbcplacelondon.com
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>

              {/* Tags */}
              <td className="tags-td  hidden xl:flex">
                <span className="custom-project-tag">HTML</span>
                <span className="custom-project-tag">Firebase</span>
                <span className="custom-project-tag">CSS</span>
                <span className="custom-project-tag">JavaScript</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://www.rbcplacelondon.com/"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit RBC Place London Github repository"
                >
                  rbcplacelondon.com
                  <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>
            {/* Our stores Infanti*/}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">Infati stores page</div>
                <div className="xxl:hidden">
                  <a
                    href="https://infanti.cl/pages/nuestras-tiendas-infanti"
                    target="_blank"
                    className="flex gap-1 "
                    aria-label="Visit Infant's stores page"
                  >
                    Infati stores page <FiArrowUpRight />
                  </a>
                </div>
              </td>

              {/* Tags */}
              <td className="tags-td xl:flex hidden">
                <span className="custom-project-tag">CSS</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell ">
                <a
                  href="https://infanti.cl/pages/nuestras-tiendas-infanti"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit Infant's stores page"
                >
                  infanti.cl <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>
            {/* Terms and conditions Infanti*/}
            <motion.tr
              variants={{
                hidden: { x: 80, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1.2,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">
                  Infanti Terms & Conditions page
                </div>
                <div className="xxl:hidden">
                  <a
                    href="https://infanti.cl/pages/terminos-y-condiciones"
                    target="_blank"
                    className="flex gap-1"
                    aria-label="Visit Infant's terms and conditions page"
                  >
                    Infanti Terms & Conditions page <FiArrowUpRight />
                  </a>
                </div>
              </td>
              <div></div>
              {/* Tags */}
              <td className="tags-td xl:flex hidden">
                <span className="custom-project-tag">CSS</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">Accessible</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell ">
                <a
                  href="https://infanti.cl/pages/terminos-y-condiciones"
                  target="_blank"
                  className="flex gap-1 hover:scale-110 transition-all duration-200"
                  aria-label="Visit Infant's terms and conditions page"
                >
                  infanti.cl <FiArrowUpRight />
                </a>
              </td>
            </motion.tr>
            {/* offers timer Infanti*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
