import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css/navigation";
import "../App.css";
import "swiper/css";
const Home = () => {
  const { handleClickLink } = useContext(DataContext);
  useEffect(() => {
    handleClickLink("home");
  }, []);
  const navigate = useNavigate();
  const handleClick = (projectType) => {
    if (projectType === "Modern") {
      navigate("/React--Architect-Website/portfolio/Modern");
    } else if (projectType === "Cottage") {
      navigate("/React--Architect-Website/portfolio/Cottage");
    } else if (projectType === "Mediterranean") {
      navigate("/React--Architect-Website/portfolio/Mediterranean");
    } else if (projectType === "Luxury") {
      navigate("/React--Architect-Website/portfolio/Luxury");
    }
  };
  return (
    <section className="section container" id="home">
      <div className="grid-container">
        <div className="grid-item hero-section">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            className="swiper"
            navigation={{
              nextEl: ".my-custom-next-button",
              prevEl: ".my-custom-prev-button",
            }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className="hero-slide">
                <img
                  src={`/React--Architect-Website/images/home/img-hero-modern2.jpg`}
                  alt="Hero Image"
                />
                <div className="hero-text">
                  <h1>
                    Explore <span id="span1">Simplicity</span>
                  </h1>
                  <p>
                    Embrace simplicity and open spaces in our modern designs,
                    where form meets function in every corner.
                  </p>
                  <button
                    onClick={() => {
                      handleClick("Modern");
                      handleClickLink("portfolio");
                    }}
                    className="hero-btn"
                  >
                    Explore
                  </button>
                </div>
                <div className="widges">
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Cubist Dream</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A modern house composed of a series of cubes, playing with
                      form and space.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/modern/11"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Glass Oasis</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A modern house with extensive use of glass, creates a
                      seamless indoor-outdoor connection.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/modern/1"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="hero-slide">
                <img
                  src={`/React--Architect-Website/images/home/img-hero-cott.jpg`}
                  alt="Hero Image"
                />
                <div className="hero-text">
                  <h1>
                    Discover <span id="span2">Coziness</span>
                  </h1>
                  <p>
                    Experience the charm and comfort of our cottage-style homes,
                    perfect for those who cherish warmth and tradition.
                  </p>
                  <button
                    onClick={() => {
                      handleClick("Cottage");
                      handleClickLink("portfolio");
                    }}
                    className="hero-btn"
                  >
                    Explore
                  </button>
                </div>
                <div className="widges">
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Country Comfort</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A cottage house that embodies the comfort and simplicity
                      of country living.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/cottage/5"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Cozy Corner</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A charming cottage nestled in a serene location, offering
                      a warm and inviting atmosphere.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/cottage/4"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="hero-slide">
                <img
                  src={`/React--Architect-Website/images/home/img-hero-medt.jpg`}
                  alt="Hero Image"
                />
                <div className="hero-text">
                  <h1>
                    Uncover <span id="span3">Serenity</span>
                  </h1>
                  <p>
                    Dive into the rich textures and detailing of our
                    Mediterranean homes, designed for luxury and leisure.
                  </p>
                  <button
                    onClick={() => {
                      handleClick("Mediterranean");
                      handleClickLink("portfolio");
                    }}
                    className="hero-btn"
                  >
                    Explore
                  </button>
                </div>
                <div className="widges">
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Azure Vista</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A Mediterranean house with a stunning view of the sea,
                      providing a seamless indoor-outdoor living experience.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/mediterranean/2"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Seaside Solace</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A Mediterranean house offering solace by the sea. With its
                      spacious interiors and stunning sea views.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/mediterranean/12"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="hero-slide">
                <img
                  src={`/React--Architect-Website/images/home/img-hero-lux.jpg`}
                  alt="Hero Image"
                />
                <div className="hero-text">
                  <h1>
                    Experience <span id="span4">Luxury</span>
                  </h1>
                  <p>
                    Enjoy the grand feel of our high-end homes, where every
                    detail speaks of luxury and style.
                  </p>
                  <button
                    onClick={() => {
                      handleClick("Luxury");
                      handleClickLink("portfolio");
                    }}
                    className="hero-btn"
                  >
                    Explore
                  </button>
                </div>
                <div className="widges gold-col">
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Golden Gateway</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A luxurious house with a grand golden gateway that sets
                      the tone for the entire house.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/luxury/7"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                  <div className="widget-project">
                    <div className="project-info">
                      <div className="project-name">
                        <h2>The Lavish Loft</h2>
                      </div>
                    </div>
                    <p className="project-descrp">
                      A luxury house with a loft providing stunning city views
                      and an elevated living experience.
                    </p>
                    <Link
                      to="/React--Architect-Website/portfolio/luxury/9"
                      onClick={() => {
                        handleClickLink("portfolio");
                      }}
                      className="widget-btn"
                    >
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <button className="my-custom-next-button">
              <IoIosArrowForward />
            </button>
            <button className="my-custom-prev-button">
              <IoIosArrowBack />
            </button>
          </Swiper>
        </div>
        <div className="grid-item">
          <div className="widget-title">
            <h2> Discover Diverse Architectural Styles</h2>
            <h5>A World of Design Awaits</h5>
          </div>
          <p className="widget-para">
            Welcome to our platform, where we celebrate the diversity of
            architectural styles. From the charm of classic designs to the sleek
            lines of modern architecture, there's a style for everyone. We
            invite you to explore, get inspired, and find the style that speaks
            to you.
          </p>

          <Link
            to="/React--Architect-Website/portfolio/All-projects"
            onClick={() => {
              handleClickLink("portfolio");
            }}
            className="widget-btn"
          >
            <FaLongArrowAltRight />
          </Link>
        </div>
        <div className="grid-item">
          <div className="client-info">
            <h2>John Doe</h2>
            <h5>Esteemed Architect and Designer</h5>
          </div>
          <p className="small-para">
            John Doe, an innovative architect and valued client, shares:
          </p>
          <p className="quoted-para">
            “ Their diverse styles and quality work impress me. Their platform
            is a great architectural resource. Working with them has been a
            pleasure.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
