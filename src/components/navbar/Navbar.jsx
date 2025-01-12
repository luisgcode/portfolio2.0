import React from "react";
import { luisLogo } from "../media";
import { AiFillSound } from "react-icons/ai";
import "./navbar.css";
import sound from "../../assets/audio/keyboard-audio.mp3";
import { motion } from "framer-motion";

const Navbar = () => {
  const audio = new Audio(sound);
  audio.currentTime = 5;
  audio.volume = 0.4;

  function play() {
    audio.play(); // Reproducir el audio
  }

  function stop() {
    audio.pause(); // Pausar el audio
  }

  return (
    <div className="navbar">
      <div className="navigation flex items-center justify-between px-8 py-6 md:p-mid_pad">
        <div className="navigation-logo cursor-pointer relative">
          <img
            onMouseEnter={play}
            onMouseOut={stop}
            className="logo-image md:min-w-[65px] "
            src={luisLogo}
            alt="My portfolio's logo"
          />
          <AiFillSound className="sound-icon" />
          <div className=" bubble "></div>
          <div className=" bubble "></div>
          <div className=" bubble "></div>
          <div className=" bubble "></div>
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
          className="navigation-items hidden md:flex gap-12 "
        >
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a
              className="   border-highlightColor border-2 text-white py-2 px-4 rounded-md"
              href="#"
            >
              Contact
            </a>
          </li>
        </motion.ul>
        <div className="mobile-menu md:hidden">✅</div>
      </div>
    </div>
  );
};

export default Navbar;
