function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            CAREER JOURNEY
          </span>

          <h2>
            Professional Experience
          </h2>

        </div>

        <div className="career-timeline">

          {/* HCL */}

          <div className="career-item">

            <div className="career-year">
              2025 - Present
            </div>

            <div className="career-content">

              <div className="company-header">

                <h3>HCLTech</h3>

                <span>
                  Analyst
                </span>

              </div>

              <h5>
                Ford Motor Company
              </h5>

              <p>
                Supporting enterprise Angular applications,
                resolving production issues, performing root
                cause analysis and implementing backend
                enhancements using Java technologies.
              </p>

              <div className="skill-tags">

                <span>Java</span>
                <span>Angular</span>
                <span>RCA</span>
                <span>Production Support</span>
                <span>Monitoring</span>

              </div>

            </div>

          </div>

          {/* Scintillate */}

          <div className="career-item">

            <div className="career-year">
              2024 - 2025
            </div>

            <div className="career-content">

              <div className="company-header">

                <h3>Scintillate Informatics</h3>

                <span>
                  UI Developer
                </span>

              </div>

              <h5>
                230+ Websites Delivered
              </h5>

              <p>
                Developed and deployed responsive websites
                across multiple industries using modern web
                technologies while ensuring performance,
                scalability and user experience.
              </p>

              <div className="skill-tags">

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>WordPress</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}