import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import RecommendedProjects from "./RecommendedProjects";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css/navigation";
import "../App.css";
import "swiper/css";
const Projectdetails = () => {
  const { id } = useParams();
  const { projects } = useContext(DataContext);
  // Find the project with the matching id
  const project = projects.find((project) => project.id.toString() === id);
  // Extract the gallery from the project
  const { gallery } = project;
  // Filter projects of the same type (for recommendation)
  let similarProjects = projects.filter(
    (p) => p.type === project.type && p.id.toString() !== id
  );
  // If there are no similar projects, get the first 3 projects of a different type
  if (similarProjects.length === 0) {
    similarProjects = projects.filter(
      (p) => p.type !== project.type && p.id.toString() !== id
    );
    if (similarProjects.length > 3) {
      similarProjects = similarProjects.slice(0, 3);
    }
  } else if (similarProjects.length > 3) {
    // If there are more than 3 similar projects, slice the array to get only the first 3
    similarProjects = similarProjects.slice(0, 3);
  }
  // Scroll to top when component mounts
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, [id]);
  const navigate = useNavigate();
  const projectCategorie = project.type;

  const handleClickBack = () => {
    navigate(`/React--Architect-Website/portfolio/${projectCategorie}`);
  };
  return (
    <section className="section" id="projectdetails" ref={myRef}>
      <button
        id="back"
        onClick={() => {
          handleClickBack();
        }}
      >
        <IoIosArrowBack />
      </button>
      {project && (
        <div id="project-details">
          <div id="details">
            <img
              src={project.image}
              className="project-img"
              alt={project.name}
            />{" "}
            <div className="title">
              <h1>{project.name}</h1>
            </div>
            <p className="details-paragraph">{project.details}</p>
            <div className="details-content">
              <div className="details-text">
                <ul>
                  <li>
                    <p>Client</p>
                  </li>
                  <li>
                    <p>Location</p>
                  </li>
                  <li>
                    <p>Completion</p>
                  </li>
                  <li>
                    <p>Size</p>
                  </li>
                  <li>
                    <p>Type</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>{project.client}</span>
                  </li>
                  <li>
                    <span>{project.location}</span>
                  </li>
                  <li>
                    <span>{project.completion}</span>
                  </li>
                  <li>
                    <span>{project.size}</span>
                  </li>
                  <li>
                    <span>{project.type}</span>
                  </li>
                </ul>
              </div>
              <Swiper
                style={{ flexBasis: "50%" }}
                className="swiper"
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".my-custom-next-button",
                  prevEl: ".my-custom-prev-button",
                }}
              >
                {gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="details-img ">
                      <img src={image} alt={`Slide ${index}`} />
                    </div>
                  </SwiperSlide>
                ))}
                <button className="my-custom-next-button">
                  <IoIosArrowForward />
                </button>
                <button className="my-custom-prev-button">
                  <IoIosArrowBack />
                </button>
              </Swiper>
            </div>
            <div className="similar-projects">
              <h2>Similar Projects</h2>
              <div className="recommended-projects projects-wrapper grid">
                {similarProjects.map((project) => (
                  <RecommendedProjects key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projectdetails;
