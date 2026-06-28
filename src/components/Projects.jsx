function Projects() {
  return (
    <section id="projects">

      <div className="container">

        <h2 className="text-center text-info mb-5">
          Featured Projects
        </h2>

        <div className="row g-4">

          {/* Project 1 */}

          <div className="col-lg-6">
            <div className="project-card">

              <h4>
                Enterprise Restaurant Management Platform
                <span className="project-tech">
                  {" "} | ReactJS, Node.js, MySQL
                </span>
              </h4>

              <ul className="project-list">
                <li>
                  Engineered a comprehensive full-stack solution to streamline
                  order processing, staff scheduling, and inventory management
                  for large datasets.
                </li>

                <li>
                  Implemented responsive user interfaces and optimized backend
                  SQL queries, significantly improving overall operational
                  efficiency.
                </li>
              </ul>

            </div>
          </div>

          {/* Project 2 */}

          <div className="col-lg-6">
            <div className="project-card">

              <h4>
                Voice-Based Encryption System
                <span className="project-tech">
                  {" "} | Java, JDBC, SQL
                </span>
              </h4>

              <ul className="project-list">
                <li>
                  Developed a secure data storage architecture using Java to
                  protect sensitive information deployed on untrusted servers.
                </li>

                <li>
                  Engineered robust access control and encryption mechanisms to
                  strictly prevent unauthorized data retrieval and ensure
                  compliance.
                </li>
              </ul>

            </div>
          </div>

          {/* Project 3 */}

          <div className="col-lg-6">
            <div className="project-card">

              <h4>
                Secure Intra-Vehicle Communication
                <span className="project-tech">
                  {" "} | Python, Machine Learning
                </span>
              </h4>

              <ul className="project-list">
                <li>
                  Designed a vehicle network security system utilizing Python
                  and anomaly detection models to proactively identify
                  potential cyber threats.
                </li>

                <li>
                  Enhanced in-vehicle communication reliability by predicting
                  and mitigating network vulnerabilities in real time.
                </li>
              </ul>

            </div>
          </div>

          {/* Project 4 */}

          <div className="col-lg-6">
            <div className="project-card">

              <h4>
                Real-Time Gesture Control System
                <span className="project-tech">
                  {" "} | Python, OpenCV, MediaPipe
                </span>
              </h4>

              <ul className="project-list">
                <li>
                  Built an intuitive computer vision application to enable
                  touch-free media volume control, enhancing digital
                  accessibility.
                </li>

                <li>
                  Integrated OpenCV and MediaPipe for accurate, real-time hand
                  gesture recognition and dynamic interface interaction.
                </li>
              </ul>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;