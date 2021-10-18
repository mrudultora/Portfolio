import { FaDownload } from "react-icons/fa";
import CV from "../assets/Mrudul_Tora_Resume.pdf";

export const DownloadButton = (props) => {
  return (
    <button className="hero-btn resume">
      <a
        href={CV}
        download="Mrudul_Tora_Resume"
        target="_blank"
        rel="noreferrer"
        className="resume-link"
      >
        Resume <FaDownload />
      </a>
    </button>
  );
};
