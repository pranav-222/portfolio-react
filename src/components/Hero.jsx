import profileImage from "../assets/profile.jpeg";
import resumePdf from "../assets/cv__.pdf";
import { FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { useEffect } from "react";
import Typed from "typed.js";

function Hero() {

  useEffect(() => {

  const typed = new Typed("#typing", {
    strings: [
      "Software Engineer",
      "Java Developer",
      "Angular Developer",
      "Front-End Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  return () => {
    typed.destroy();
  };

}, []);
  return (
    <section id="hero">
      <div className="hero-grid"></div>

      <h1 className="bg-text">
        PRANAV
      </h1>

      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6">

            <h1 className="display-2 fw-bold">
  FULL STACK
  <br />
  SOFTWARE ENGINEER
  <span className="text-info d-block">
    Pranav Devane
  </span>
</h1>

            <h2 className="mt-3">
  <span id="typing"></span>
</h2>

            <div className="hero-tags mt-4">
              <span>Java</span>
              <span>Angular</span>
              <span>Spring Boot</span>
              <span>React</span>
            </div>

            <p className="mt-4 text-secondary">
  Full Stack Software Engineer with 2+ years of experience
  designing scalable web applications using Java, Spring Boot,
  Angular, ReactJS, REST APIs and modern database technologies.
</p>

            <div className="mt-4">

              <a
                href="#projects"
                className="btn btn-info btn-lg me-3"
              >
                View Projects
              </a>

              <a
                href={resumePdf}
                className="btn btn-outline-light btn-lg"
                download
              >
                Download Resume
              </a>

            </div>

            <div className="row mt-5">

              <div className="col-4">
                <h2 className="text-info">2+</h2>
<p>Years Experience</p>
              </div>

              <div className="col-4">
                <h2 className="text-info">230+</h2>
                <p>Websites Delivered</p>
              </div>

              <div className="col-4">
                <h2 className="text-info">99.9%</h2>
                <p>SLA Compliance</p>
              </div>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <div className="hero-image-wrapper">

            <div className="floating-card card1">
              <FaJava size={35} />
              <span>Java</span>
            </div>

            <div className="floating-card card2">
              <SiAngular size={35} />
              <span>Angular</span>
            </div>

            <div className="floating-card card3">
              <FaReact size={35} />
              <span>React</span>
            </div>

            <div className="floating-card card4">
              <FaDatabase size={35} />
              <span>SQL</span>
            </div>

              <div className="profile-circle">
                <img
                  src={profileImage}
                  alt="Pranav Devane"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;