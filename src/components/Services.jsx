import React from "react";
import "../App.css";
const Services = () => {
  return (
    <section className="section container" id="services">
      <h1 className="services-main-title">What We Do</h1>
      <div className="grid services">
        <div className="widget">
          <div className="border border-horizontal"></div>
          <div className="border border-vertical"></div>
          <h3>Architectural Design</h3>
          <p>
            We create unique and functional designs for various types of
            buildings. Our designs not only meet our clients’ needs but also
            enhance the aesthetics of the surroundings.
          </p>
        </div>
        <div className="widget">
          <div className="border border-horizontal"></div>
          <div className="border border-vertical"></div>
          <h3>Project Consultation</h3>
          <p>
            We provide expert advice and guidance at every stage of your
            construction project. From feasibility studies to budget estimates
            and timelines, we ensure you have all the information you need.
          </p>
        </div>
        <div className="widget">
          <div className="border border-horizontal"></div>
          <div className="border border-vertical"></div>
          <h3>Planning and Zoning</h3>
          <p>
            We navigate the complex process of obtaining necessary permits and
            approvals for your construction projects. Our team ensures your
            project complies with all local planning and zoning laws.
          </p>
        </div>
        <div className="widget">
          <div className="border border-horizontal"></div>
          <div className="border border-vertical"></div>
          <h3>3D Modeling and Visualization</h3>
          <p>
            With our advanced 3D modeling software, we bring our designs to
            life. This allows you to visualize the finished project and make any
            necessary adjustments before construction begins.
          </p>
        </div>
        <div className="widget">
          <div className="border border-horizontal"></div>
          <div className="border border-vertical"></div>
          <h3>Construction</h3>
          <p>
            Our skilled team of builders and tradespeople construct your project
            with the utmost attention to detail. We ensure high-quality
            construction that brings our designs to life.
          </p>
        </div>
        <div className="widget">
          <div className="border border-horizontal"></div>
          <div className="border border-vertical"></div>
          <h3>Project Management</h3>
          <p>
            We oversee the entire process from design to construction. Our
            project management ensures that your project is completed on time,
            within budget, and according to the design specifications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
