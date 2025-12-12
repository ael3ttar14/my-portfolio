import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        <p className="logo">Ahmad Elattar</p>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          &#9776;
        </div>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
