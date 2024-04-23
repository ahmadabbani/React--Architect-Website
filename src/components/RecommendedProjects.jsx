import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../App.css";
const RecommendedProjects = ({ project }) => {
  return (
    <div className=" recomd-project project">
      <img src={project.image} className="project-img" alt={project.name} />
      <div className="project-body">
        <div className="p-name">
          <h2 style={{ margin: "0" }}>{project.name}</h2>
          <p>{project.type}</p>
        </div>
        <p className="recomd-details">{project.details}</p>
      </div>

      <Link
        to={`/portfolio/${project.type}/${project.id}`}
        className="showdetails-btn"
      >
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default RecommendedProjects;
