import React, { useRef, useState } from "react";
import "./Navbar.css";
import nav_underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setMenu(section);
    setTimeout(closeMenu, 300); // allow scroll to finish
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open Menu"
          className="nav-mob-open"
        />
      )}
      {isMenuOpen && (
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
      )}

      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            className="anchor-link"
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          {menu === "home" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <a
            href="#about"
            className="anchor-link"
            onClick={() => handleNavClick("about")}
          >
            About Me
          </a>
          {menu === "about" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <a
            href="#services"
            className="anchor-link"
            onClick={() => handleNavClick("services")}
          >
            Services
          </a>
          {menu === "services" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <a
            href="#work"
            className="anchor-link"
            onClick={() => handleNavClick("work")}
          >
            Work
          </a>
          {menu === "work" && <img src={nav_underline} alt="" />}
        </li>
        <li>
          <a
            href="#contact"
            className="anchor-link"
            onClick={() => handleNavClick("contact")}
          >
            Contact Me
          </a>
          {menu === "contact" && <img src={nav_underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">
        <a className="anchor-link" href="#contact">
          Connect with Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
