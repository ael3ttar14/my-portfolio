import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <p className="logo">Ahmad Hamdy</p>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          &#9776;
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>

          <li className="social-links">
            <a href="https://github.com/ahmadhamdy14" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-hamdy-031350374/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://wa.me/201069199985" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
