import { useState } from "react";
import Navbar from "./Navbar";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container noselect">
      <NavLink to={"/"} >
        <h1>
          Anna<span>MIT</span>
        </h1>
      </NavLink>
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`sus ${menuOpen ? "top" : ""}`}></span>
        <span className={`sus ${menuOpen ? "mid" : ""}`}></span>
        <span className={`sus ${menuOpen ? "bottom" : ""}`}></span>
      </div>
      <Navbar menuOpen={menuOpen} />
      <div className="login-container">
        <button className="login-button">Sign In</button>
      </div>
    </header>
  );
}
