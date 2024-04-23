import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { FaLongArrowAltRight } from "react-icons/fa";
import luxuryImg from "/images/home/img-hero-lux.jpg";
import modernImg from "/images/modern&luxury/img-preview-modern.jpg";
import mediterraneanImg from "/images/home/img-hero-medtt.jpg";
import cottageImg from "/images/home/img-hero-cott.jpg";
import defaultImg from "/images/default.jpg";
import "../App.css";

const Works = () => {
  const { projects, handleClickLink } = useContext(DataContext);
  const descriptions = [
    {
      type: "modern",
      title: "Explore Simplicity",
      description: `Embrace simplicity and open spaces in our modern designs,
      where form meets function in every corner.`,
    },
    {
      type: "cottage",
      title: "Discover Coziness",
      description: `Experience the charm and comfort of our cottage-style homes,
      perfect for those who cherish warmth and tradition.`,
    },
    {
      type: "mediterranean",
      title: "Uncover Serenity",
      description: ` Dive into the rich textures and detailing of our
    Mediterranean homes, designed for luxury and leisure.`,
    },
    {
      type: "luxury",
      title: "Experience Luxury",
      description: ` Enjoy the grand feel of our high-end homes, where every
    detail speaks of luxury and style.`,
    },
  ];
  // empty array to hold the selected projects (project from eact type)
  let selectedProjects = [];

  //for each type
  const types = [...new Set(projects.map((project) => project.type))];
  types.forEach((type) => {
    // Find the first project of this type
    const project = projects.find((project) => project.type === type);

    //add it to the selected projects
    if (project) {
      selectedProjects.push(project);
    }
  });
  return (
    <section className="section container" id="latestprojects">
      <h1 className="projects-main-title">Our Architectural Expertise</h1>
      <div className="grid latestprojects-grid ">
        <div className=" latest-projects grid">
          {selectedProjects.map((project) => {
            // Find the corresponding description
            let description = descriptions.find(
              (desc) => desc.type === project.type
            );
            return (
              <div key={project.id} className="project ">
                <img
                  src={
                    project.type === "Modern"
                      ? modernImg
                      : project.type === "Mediterranean"
                      ? mediterraneanImg
                      : project.type === "Luxury"
                      ? luxuryImg
                      : project.type === "Cottage"
                      ? cottageImg
                      : defaultImg
                  }
                  className="project-img"
                  alt={project.name}
                />
                <div className="project-body">
                  <div className="p-name">
                    <h2>{description ? description.title : project.type}</h2>
                  </div>
                  <p className="details">
                    {description ? description.description : project.details}
                  </p>
                </div>
                <Link
                  to={`/React--Architect-Website/portfolio/${project.type}`}
                  onClick={() => {
                    handleClickLink("portfolio");
                  }}
                  className="showdetails-btn"
                >
                  {project.type} <FaLongArrowAltRight />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text">
          <h2>Diverse Design Styles</h2>
          <p>
            At our architecture firm, we take pride in our adaptability and
            extensive knowledge. We are experts in a range of styles, including
            Modern, Cottage, Mediterranean, and Luxury architecture. Whether
            you’re attracted to the clean lines of Modern designs, the cozy
            appeal of Cottage homes, the warm ambiance of Mediterranean
            residences, or the opulence of Luxury structures, we possess the
            skills to realize your architectural dreams. Our varied portfolio
            reflects our dedication to accommodating our clients’ distinct
            tastes and requirements. Allow us to assist you in constructing a
            space that genuinely embodies the essence of home.
          </p>
          <div className=" see-portfolio">
            <Link
              to="/React--Architect-Website/portfolio/All-projects"
              onClick={() => {
                handleClickLink("portfolio");
              }}
              id="see-portfolio"
            >
              See Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
