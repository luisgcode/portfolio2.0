import React from "react";
import { luisLogo } from "../import_data";
import { AiFillSound } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar sec-pad">
      <div className="navigation flex items-center justify-between">
        <div className="navigation-logo cursor-pointer relative">
          <img
            className="logo-image"
            src={luisLogo}
            alt="My portfolio's logo"
          />
          <AiFillSound className="sound-icon" />
        </div>
        <ul className="navigation-items flex gap-12">
          <li>
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="text-white" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-white" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
