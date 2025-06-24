import React from "react";
import "./stickymenu.css";
import Navbar from "../navbar/Navbar";

const StickyMenu = () => {
  return (
    <div className="stickyMenu">
      <div className="stickyContent sticky ">
        <Navbar />
      </div>
    </div>
  );
};

export default StickyMenu;
