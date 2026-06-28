function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-8">

            <span className="about-label">
              ABOUT ME
            </span>

            <h2 className="about-heading mt-3">
              Building Enterprise Applications &
              Modern Digital Experiences
            </h2>

            <p className="about-description">
              Full Stack Software Engineer with over 2 years of experience designing and developing scalable, high-performance web applications using Java, Spring Boot, Angular, ReactJS, and Node.js. Passionate about building reliable, user-centric solutions that combine clean architecture, responsive design, and efficient backend systems.
            </p>

            <p className="about-description">
              Currently contributing to enterprise applications for Ford Motor Company through HCLTech, where I work on Java-based backend services, Angular applications, REST API integrations, production issue resolution, application monitoring, and performance optimization within Agile teams.
            </p>

            <p className="about-description mb-0">
              Previously worked as a Front-End Software Engineer, developing responsive web applications, optimizing frontend performance, and delivering customized digital solutions for clients across diverse industries. Alongside my professional experience, I enjoy building end-to-end projects that strengthen my expertise in full-stack development and modern web technologies.
            </p>

          </div>

          {/* Right Side */}
          <div className="col-lg-4 mt-4 mt-lg-0">

            <div className="profile-card">

              <div className="profile-item">
                <span>Experience</span>
                <strong>2+ Years</strong>
              </div>

              <div className="profile-item">
                <span>Current Role</span>
                <strong>Analyst</strong>
              </div>

              <div className="profile-item">
                <span>Enterprise Client</span>
                <strong>Ford Motor Company</strong>
              </div>

              <div className="profile-item">
                <span>Core Stack</span>
                <strong>Java • Spring Boot
Angular • ReactJS</strong>
              </div>

              <div className="profile-item">
                <span>Specialization</span>
                <strong>Full Stack Development</strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;