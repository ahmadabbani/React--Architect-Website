import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { FiArrowDownRight } from "react-icons/fi";
import { SiKnowledgebase } from "react-icons/si";

import {
  FaHandshakeSimple,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { IoShieldCheckmark } from "react-icons/io5";

import "../App.css";
const AboutUs = () => {
  const { handleClickLink } = useContext(DataContext);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
  useEffect(() => {
    handleClickLink("aboutUs");
  }, []);
  return (
    <>
      <section className="section container" id="aboutUs">
        <h1 className="aboutUs-main-title">About Us</h1>
        <div className="grid aboutUsHighlight">
          <div className="ourStory ">
            <div className="ourStory-imgs">
              <img
                src={`/React--Architect-Website/images/aboutUs/aboutUs-5.jpg`}
                alt="about Image"
              />
              <img
                src={`/React--Architect-Website/images/aboutUs/aboutUs-8.jpg`}
                alt="about Image"
              />
              <img
                src={`/React--Architect-Website/images/aboutUs/aboutUs-9.jpg`}
                alt="about Image"
              />
              <img
                src={`/React--Architect-Website/images/aboutUs/aboutUs-17.jpg`}
                alt="about Image"
              />
            </div>
            <div className="ourStory-text">
              <div className="ourStory-title">
                <h2>Our story </h2>
                <span>
                  <FiArrowDownRight />
                </span>
              </div>
              <p>
                our architectural firm has been transforming visions into
                reality since 1995. With a passion for design and a focus on
                excellence, we started our journey in a small office in New York
                City. Today, we are proud to have our work recognized globally.
                Our projects range from single-family homes to large-scale
                residential complexes, each reflecting our commitment to
                innovative design, sustainability, and client satisfaction. We
                believe in the power of architecture to create spaces that serve
                their inhabitants, and to shape the world around us. Our team of
                dedicated professionals works collaboratively with each client,
                embracing their unique vision and needs, to create spaces that
                truly represent who they are.
              </p>
              <div className="storyEndNote">
                <div className="ceo-info">
                  <img
                    src={`/React--Architect-Websiteimages/Team/image-jonathan.jpg`}
                  />
                  <div className="ceo-name">
                    <h5>Jonathan Walters</h5>
                    <h6>Founder & CEO</h6>
                  </div>
                </div>
                <p className="quoted-para">
                  "Innovation and sustainability are not just our design
                  principles, they are the pillars of every creation at our
                  firm. We don't just build structures, we craft legacies."
                </p>
              </div>
            </div>
          </div>
          <div className="whyChoosingUs ">
            <div className="choosingUs-text">
              <h2>Why Choosing Us</h2>
              <div className=" choosingUs-flex">
                <div className="choosingUs-flex-element">
                  <PiLightbulbFilamentFill className="myIconStyle lightIcon" />{" "}
                  <div className="small-parag">
                    <h3>Innovative Solutions</h3>

                    <p>
                      We’re not just builders; we’re innovators. We use the
                      latest technologies and design principles to create
                      buildings that are not only beautiful but also sustainable
                      and efficient.
                    </p>
                  </div>
                </div>
                <div className="choosingUs-flex-element">
                  <SiKnowledgebase className="myIconStyle bookIcon" />
                  <div className="small-parag">
                    {" "}
                    <h3>Comprehensive Expertise</h3>
                    <p>
                      {" "}
                      Our experienced team, with diverse backgrounds in
                      architecture and construction, manages all project
                      aspects. We ensure seamless integration and consistently
                      deliver top-quality results.
                    </p>
                  </div>
                </div>
                <div className="choosingUs-flex-element">
                  <IoShieldCheckmark className="myIconStyle trustIcon" />
                  <div className="small-parag">
                    {" "}
                    <h3>Credibility and Trust</h3>
                    <p>
                      With years of experience in the industry, we’ve built a
                      reputation for delivering high-quality projects on time
                      and within budget. Our past clients vouch for our
                      credibility and trustworthiness.
                    </p>
                  </div>
                </div>
                <div className="choosingUs-flex-element">
                  <FaHandshakeSimple className="myIconStyle handIcon" />
                  <div className="small-parag">
                    <h3>Client-Focused Support</h3>

                    <p>
                      Our relationship with clients doesn’t end when the project
                      is completed. We provide exceptional post-construction
                      support, including maintenance advice and building
                      inspections, to ensure your building remains in top
                      condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="choosingUs-img">
              <img
                src={`/React--Architect-Website/images/aboutUs/aboutUs-4.jpg`}
                alt="about Image"
              />{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="ourTeam">
        <h2>Meet Our Team</h2>
        <p className="teamDescp">
          With decades of experience, our team is committed to delivering
          professional architectural services of the highest standard.
        </p>
        <div className="team-flex">
          <div className="team-card">
            <img src={`/React--Architect-Websiteimages/Team/team1.png`} />
            <div className="teamName">
              {" "}
              <h3>Jane Smith</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img src={`/React--Architect-Websiteimages/Team/team2.png"`} />
            <div className="teamName">
              <h3>Robert Johnson</h3>
              <p>Project Manager</p>
            </div>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img src={`/React--Architect-Websiteimages/Team/team3.png`} />
            <div className="teamName">
              {" "}
              <h3>John Doe</h3>
              <p> Construction Manager</p>
            </div>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img src={`/React--Architect-Websiteimages/Team/team4.png`} />
            <div className="teamName">
              <h3>Emily Williams</h3>
              <p> Principal Architect</p>
            </div>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
