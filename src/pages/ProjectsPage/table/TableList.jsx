import React from "react";
import "./table.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const TableList = () => {
  return (
    <div>
      <div className="p-sma_pad md:p-mid_pad">
        <table className="table">
          {/* Table heading */}
          <thead className="text-left">
            <tr>
              <th className=" ">Year</th>
              <th className=" ">Projects</th>
              <th className="hidden xl:table-cell   ">Tech Stack</th>
              <th className="hidden  xxl:table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            {/* portfolio v2 */}
            <tr>
              {/* Year */}
              <td>2025</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">Portfolio (v2)</div>
                <div className=" xxl:hidden ">
                  <a
                    href="https://www.luisgcode.com/"
                    target="_blank"
                    className="flex gap-1"
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
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">SPA</span>
                <span className="custom-project-tag">Bilingual</span>
                <span className="custom-project-tag">Accessible</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://www.luisgcode.com/"
                  target="_blank"
                  className="flex gap-1"
                >
                  luisgcode.com <FiArrowUpRight />
                </a>
              </td>
            </tr>
            {/* Global Technologies */}
            <tr>
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
                  className="flex gap-1"
                >
                  globaltechnologies.web.app <FiArrowUpRight />
                </a>
              </td>
            </tr>
            {/* Can jet Pattern Library & Dashboard */}
            <tr>
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
                    className="flex gap-2"
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
                  className="flex gap-2"
                >
                  GitHub
                  <FaGithub />
                </a>
              </td>
            </tr>
            {/* Portfolio v1 */}
            <tr>
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
                  >
                    Portfolio (v1)
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>
              {/* Tags */}
              <td className="tags-td   xl:flex hidden">
                <span className="custom-project-tag">Sass</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">Bilingual</span>
                <span className="custom-project-tag">Accessible</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell">
                <a
                  href="https://github.com/luisgcode/portfolio2024"
                  target="_blank"
                  className="flex gap-2"
                >
                  GitHub
                  <FaGithub />
                </a>
              </td>
            </tr>
            {/* RBC place Hub */}
            <tr>
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
                  >
                    rbcplacelondon.com
                    <FiArrowUpRight />
                  </a>
                </div>
              </td>

              {/* Tags */}
              <td className="tags-td xxl:table-cell xl:flex hidden">
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
                  className="flex gap-1"
                >
                  rbcplacelondon.com
                  <FiArrowUpRight />
                </a>
              </td>
            </tr>
            {/* Our stores Infanti*/}{" "}
            <tr>
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">
                <div className="hidden xxl:table-cell">Infati stores page</div>
                <div className="xxl:hidden">
                  <a
                    href="https://infanti.cl/pages/nuestras-tiendas-infanti"
                    target="_blank"
                    className="flex gap-1"
                  >
                    Infati stores page <FiArrowUpRight />
                  </a>
                </div>
              </td>

              {/* Tags */}
              <td className="tags-td   xl:flex hidden">
                <span className="custom-project-tag">CSS</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
              </td>
              {/* link */}
              <td className="link hidden xxl:table-cell ">
                <a
                  href="https://infanti.cl/pages/nuestras-tiendas-infanti"
                  target="_blank"
                  className="flex gap-1"
                >
                  infanti.cl <FiArrowUpRight />
                </a>
              </td>
            </tr>
            {/* Terms and conditions Infanti*/}
            <tr>
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
                  className="flex gap-1"
                >
                  infanti.cl <FiArrowUpRight />
                </a>
              </td>
            </tr>
            {/* offers timer Infanti*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
