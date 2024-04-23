import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import "../App.css";
const About = () => {
  const { handleClickLink } = useContext(DataContext);
  return (
    <section className="section container" id="about">
      <div>
        <h1 className="about-main-title">Who We Are</h1>
        <div className="about-preview grid">
          <div className="about-text">
            <h2>Brief Story</h2>
            <p>
              Established in 1995, our architectural firm is a globally
              recognized practice based in New York City. We specialize in
              creating innovative and sustainable designs that cater to our
              clients' unique visions. From single-family homes to large
              residential complexes, our work is a testament to our commitment
              to excellence and client satisfaction. Join us on our journey as
              we continue to shape the future of architecture.
            </p>
            <div className=" to-aboutUs">
              <Link
                to="/React--Architect-Website/aboutUs"
                onClick={() => {
                  handleClickLink("aboutUs");
                }}
                id="knowMore-btn"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
