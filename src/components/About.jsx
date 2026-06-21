function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-info">
          About Me
        </h2>

        <div className="row">

          <div className="col-lg-6">

            <h3>Software Engineer</h3>

            <p className="mt-4">
              Software Engineer with experience in Java,
              Angular, Front-End Development and Application
              Support. Currently contributing to enterprise
              applications for Ford Motor Company through
              HCLTech.
            </p>

            <p>
              Previously worked as a UI Developer,
              successfully delivering 230+ websites across
              multiple industries using modern web technologies.
            </p>

          </div>

          <div className="col-lg-6">

            <div className="card about-card">

              <h4 className="text-info">
                Professional Highlights
              </h4>

              <ul>
                <li>2+ Years of Experience</li>
                <li>230+ Websites Delivered</li>
                <li>Ford Motor Company Project</li>
                <li>Java & Angular Development</li>
                <li>Application Support & RCA</li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;