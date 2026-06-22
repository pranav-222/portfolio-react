function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">

        <h2 className="text-center section-title mb-5">
          About Me
        </h2>

        <div className="row align-items-center g-4">

          <div className="col-lg-7">

            <span className="about-tag">
              Software Engineer
            </span>

            <h3 className="mt-3">
              Building Scalable Web Applications &
              Enterprise Solutions
            </h3>

            <p className="about-text mt-4">
              Software Engineer with 2+ years of experience
              in Java, Angular, Front-End Development and
              Application Support.
            </p>

            <p className="about-text">
              Currently contributing to enterprise
              applications for Ford Motor Company through
              HCLTech, focusing on application stability,
              issue resolution and technical analysis.
            </p>

            <p className="about-text">
              Previously worked as a UI Developer,
              delivering 230+ production-ready websites
              across multiple industries using modern web
              technologies and responsive design principles.
            </p>

          </div>

          <div className="col-lg-5">

            <div className="about-stats">

              <div className="stat-box">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-box">
                <h3>230+</h3>
                <p>Websites Delivered</p>
              </div>

              <div className="stat-box">
                <h3>Ford</h3>
                <p>Enterprise Project</p>
              </div>

              <div className="stat-box">
                <h3>Java</h3>
                <p>Angular Stack</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;