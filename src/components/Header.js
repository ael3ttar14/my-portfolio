import { Link } from "react-router-dom";
import './Header.css'; // تأكد من إنشاء ملف CSS إذا لم يكن موجود

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <p className="logo">Ahmad Elattar</p>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
