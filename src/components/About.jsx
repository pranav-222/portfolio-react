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
              Software Engineer with over 2 years of experience
              delivering scalable web applications, enterprise
              solutions, and business-focused digital products.
              Skilled in Java, Angular, Front-End Development,
              and Application Support within enterprise
              environments.
            </p>

            <p className="about-description">
              Currently contributing to enterprise applications
              for Ford Motor Company through HCLTech, focusing
              on application stability, issue resolution, root
              cause analysis, and continuous improvement.
            </p>

            <p className="about-description mb-0">
              Previously worked as a UI Developer, successfully
              delivering 230+ production-ready websites across
              multiple industries while ensuring responsive
              design, performance optimization, and seamless
              user experiences.
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
                <span>Projects</span>
                <strong>230+ Websites</strong>
              </div>

              <div className="profile-item">
                <span>Current Role</span>
                <strong>Analyst</strong>
              </div>

              <div className="profile-item">
                <span>Client</span>
                <strong>Ford Motor Company</strong>
              </div>

              <div className="profile-item">
                <span>Focus</span>
                <strong>Java • Angular</strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;