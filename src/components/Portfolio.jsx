import React, { useContext, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { useParams } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";
import "../App.css";
const Portfolio = () => {
  const { projects, handleClickLink } = useContext(DataContext);
  const { category } = useParams();
  const [selectedLink, setSelectedLink] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const toggleAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };
  const [categoryProjects, setCategoryProjects] = useState([]);

  useEffect(() => {
    if (category === "All-projects" || !category) {
      setCategoryProjects(projects);
    } else {
      setCategoryProjects(
        projects.filter((project) => project.type === category)
      );
    }
  }, [category, projects]);
  useEffect(() => {
    if (category === "All-projects" || !category) {
      setSelectedLink("All");
    } else {
      setSelectedLink(category);
    }
  }, [category]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    handleClickLink("portfolio");
  }, []);
  // Create a Set with the types of the projects to get unique categories
  const categories = [...new Set(projects.map((project) => project.type))];
  return (
    <section className="section container" id="portfolio">
      <h1 className="portfolio-main-title">Our Projects</h1>
      <div className="projects-categories-wrapper grid">
        <div className="categories">
          <div className="categories-list">
            <ul>
              <li>
                <Link
                  className={`categorie-link ${
                    "All" === selectedLink ? "selected" : ""
                  }`}
                  to="/React--Architect-Website/portfolio/All-projects"
                  onClick={() => {
                    if (selectedLink !== "All") {
                      setSelectedLink("All");
                    }
                    if (showAllProjects) {
                      setShowAllProjects(false);
                    }
                  }}
                >
                  All Types
                </Link>
              </li>
              {categories.map((categorie) => (
                <li key={categorie}>
                  <Link
                    className={`categorie-link ${
                      categorie === selectedLink ? "selected" : ""
                    }`}
                    to={`/React--Architect-Website/portfolio/${categorie}`}
                    onClick={() => {
                      setSelectedLink(categorie);
                      if (showAllProjects) {
                        setShowAllProjects(false);
                      }
                    }}
                  >
                    {categorie}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="projects projects-wrapper grid">
          {categoryProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project ${
                index >= 9 && !showAllProjects ? "hidden" : ""
              }`}
            >
              <LazyLoadImage
                src={project.image}
                className="project-img"
                alt={project.name}
                effect="blur"
              />
              <div className="project-body">
                <div className="p-name">
                  <h2>{project.name}</h2>
                  <p>{project.type}</p>
                </div>
                <p className="details">{project.details}</p>
              </div>
              <Link to={`${project.id}`} className="showdetails-btn">
                See Project
                <FaLongArrowAltRight />
              </Link>
            </div>
          ))}
        </div>
        <div className="see-more-btn">
          {categoryProjects.length >= 9 && (
            <button
              id="see-more"
              onClick={() => {
                toggleAllProjects();
                if (showAllProjects) {
                  handleScroll();
                }
              }}
            >
              {showAllProjects ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
