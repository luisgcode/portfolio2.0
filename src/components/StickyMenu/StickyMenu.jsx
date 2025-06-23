import React from "react";
import "./stickymenu.css";

const StickyMenu = () => {
  return (
    <div className="stickyMenu">
      <div className="stickyContent sticky top-0">
        <ul
          className="flex items-center gap-1 px-3 py-1.5 rounded-full 
                 bg-gray-800/50 hover:bg-gray-700/50 
                 border border-gray-700 hover:border-gray-500
                 transition-all duration-300
                 text-gray-300  text-xs"
        >
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StickyMenu;
