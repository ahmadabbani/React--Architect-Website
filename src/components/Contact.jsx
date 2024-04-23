import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import "../App.css";
const Contact = () => {
  const { handleClickLink } = useContext(DataContext);
  const handleClick = (section) => {
    setTimeout(() => {
      let top;
      if (section === "home") {
        top = document.body.scrollTop;
      }
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <section className="section container" id="contact">
        <div className="contact-container">
          <div className="contact-form">
            <h2 className="small">Get in touch</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="say hi.." required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="content grid">
            <div className="contact">
              <h2 className="small">Contact</h2>
              <ul>
                <li>Call: 123-456-789</li>
                <li>Email: info@myemail.com</li>
              </ul>
            </div>
            <div className="address">
              <h2 className="small">Address</h2>
              <ul>
                <li>4321 Elm Street,</li>
                <li>Mystic Falls, New York.</li>
              </ul>
            </div>

            <div className="links">
              <h2 className="small">Important Links</h2>
              <ul>
                <li>
                  <Link
                    to="/React--Architect-Website/"
                    onClick={() => {
                      handleClick("home");
                      handleClickLink("home");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/React--Architect-Website/aboutUs"
                    onClick={() => {
                      handleClickLink("aboutUs");
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/React--Architect-Website/portfolio/All-projects"
                    onClick={() => {
                      handleClickLink("portfolio");
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      handleClickLink("contact");
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <h2 className="small">Social</h2>
              <ul>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright-notice">
        <p>&copy; 2024 Ahmad Abbani</p>
      </div>
    </>
  );
};

export default Contact;
