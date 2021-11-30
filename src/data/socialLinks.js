import React from "react";
import { FaLinkedin, FaGooglePlay } from "react-icons/fa";
import {
  // SiCodeforces,
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiStackoverflow,
  SiGeeksforgeeks,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/mrudultora",
  },
  {
    id: 2,
    icon: <SiStackoverflow className="social-icon" />,
    url: "https://stackoverflow.com/users/13476891/mrudul-tora",
  },
  {
    id: 3,
    icon: <SiGithub className="social-icon" />,
    url: "https://github.com/mrudultora",
  },
  {
    id: 4,
    icon: <SiLeetcode className="social-icon" />,
    url: "https://leetcode.com/mrudultora/",
  },
  {
    id: 5,
    icon: <SiCodechef className="social-icon" />,
    url: "https://www.codechef.com/users/mrudultora",
  },
  {
    id: 6,
    icon: <FaGooglePlay className="social-icon" />,
    url: "https://play.google.com/store/apps/dev?id=6456574067886363117",
  },
];
