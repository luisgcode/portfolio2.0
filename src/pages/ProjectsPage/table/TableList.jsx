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
              <th>Year</th>
              <th>Project</th>

              <th>Tech Stack</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {/* portfolio v2 */}
            <tr>
              {/* Year */}
              <td>2025</td>
              {/* Project */}
              <td className="font-semibold">Portfolio (v2)</td>
              {/* Tags */}
              <td className="tags-td">
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
              <td className="link ">
                <a
                  href="https://www.luisgcode.com/"
                  target="_blank"
                  className="flex"
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
                Global Technologies - Optimization & Functionalities
              </td>
              {/* Tags */}
              <td className="tags-td">
                <span className="custom-project-tag">TypeScript</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
              </td>
              {/* link */}
              <td className="link ">
                <a
                  href="https://globaltechnologies.web.app/"
                  target="_blank"
                  className="flex"
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
              <td className="font-semibold">Pattern Library & Dashboard</td>
              {/* Tags */}
              <td className="tags-td">
                <span className="custom-project-tag">D3.js</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">CSS</span>
              </td>
              {/* link */}
              <td className="link ">
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
            {/* Portfolio v1 */}
            <tr>
              {/* Year */}
              <td>2024</td>
              {/* Project */}
              <td className="font-semibold">Portfolio (v1)</td>
              {/* Tags */}
              <td className="tags-td">
                <span className="custom-project-tag">Sass</span>
                <span className="custom-project-tag">JavaScript</span>
                <span className="custom-project-tag">Responsive</span>
                <span className="custom-project-tag">Bilingual</span>
                <span className="custom-project-tag">Accessible</span>
              </td>
              {/* link */}
              <td className="link ">
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
              <td className="font-semibold">RBC Place - Information HUB</td>
              {/* Tags */}
              <td className="tags-td">
                <span className="custom-project-tag">HTML</span>
                <span className="custom-project-tag">CSS</span>
                <span className="custom-project-tag">JavaScript</span>
              </td>
              {/* link */}
              <td className="link ">
                <a
                  href="https://www.rbcplacelondon.com/"
                  target="_blank"
                  className="flex"
                >
                  rbcplacelondon.com
                  <FiArrowUpRight />
                </a>
              </td>
            </tr>
            {/* Crowd meter */}
            {/* Our stores Infanti*/}
            {/* Terms and conditions Infanti*/}
            {/* offers timer Infanti*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
