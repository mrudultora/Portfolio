import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { links } from "../data/links";
import { BiBarChart } from "react-icons/bi";

// dark mode
import { BiMoon, BiSun } from "react-icons/bi";
const parent = document.body;

export const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeHandler = () => {
    let newState;
    if (isDarkMode) {
      newState = false;
    } else {
      newState = true;
    }
    parent.classList.toggle("dark");
    setIsDarkMode(newState);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <span>
          <span>M</span>T
        </span>
        <span onClick={darkModeHandler}>
          {isDarkMode && <BiSun />}
          {!isDarkMode && <BiMoon />}
        </span>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="nav-link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-right">
        <BiBarChart className="sidebar-toggle" onClick={openSidebar} />
      </div>
    </div>
  );
};
