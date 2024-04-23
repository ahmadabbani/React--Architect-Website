import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataContext } from "./DataProvider";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleClick = (section) => {
    setTimeout(() => {
      let top;
      if (section === "home") {
        top = document.body.scrollTop;
      } else if (section === "aboutUs") {
        top = document.getElementById("aboutUs").offsetTop;
      } else if (section === "portfolio") {
        top = document.getElementById("portfolio").offsetTop;
      } else if (section === "contact") {
        top = document.getElementById("contact").offsetTop;
      }
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }, 100);
  };

  const [scrollHeader, setScrollHeader] = useState(false);

  const checkScroll = () => {
    setScrollHeader(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  const { activeLink, handleClickLink } = useContext(DataContext);
  return (
    <header
      className={`header ${scrollHeader ? "scroll-header" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <div
          id="nav-menu"
          className={`nav-menu ${showMenu ? "show-menu" : ""}`}
        >
          <ul className="nav-list">
            <li>
              <Link
                className={`nav-link ${
                  activeLink === "home" ? "active-link" : ""
                }`}
                to={`${process.env.PUBLIC_URL}/`}
                onClick={() => {
                  handleToggle();
                  handleClick("home");
                  handleClickLink("home");
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  activeLink === "aboutUs" ? "active-link" : ""
                }`}
                to={`${process.env.PUBLIC_URL}/aboutUs`}
                onClick={() => {
                  handleToggle();
                  handleClick("aboutUs");
                  handleClickLink("aboutUs");
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  activeLink === "portfolio" ? "active-link" : ""
                }`}
                to="/portfolio/All-projects"
                onClick={() => {
                  handleToggle();
                  handleClick("portfolio");
                  handleClickLink("portfolio");
                }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  activeLink === "contact" ? "active-link" : ""
                }`}
                onClick={() => {
                  handleToggle();
                  handleClick("contact");
                  handleClickLink("contact");
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button id="nav-toggle" className="nav-toggle" onClick={handleToggle}>
          {showMenu ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-4-line"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
