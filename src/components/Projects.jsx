function Projects() {
  return (
    <section id="projects">

      <div className="container">

        <h2 className="text-center text-info mb-5">
          Featured Projects
        </h2>

        <div className="row g-4">

          <div className="col-lg-6">
            <div className="project-card">
              <h4>Restaurant Management System</h4>

              <p>
                Engineered a full-stack restaurant management solution
                using ReactJS, Node.js, and MySQL.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-card">
              <h4>Volume Control Using Hand Gestures</h4>

              <p>
                Built a real-time gesture recognition system using
                Python, OpenCV, MediaPipe, and Pycaw.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-card">
              <h4>Secure Intra-Vehicle Communication</h4>

              <p>
                Designed a vehicle network security system using
                Python and Machine Learning.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-card">
              <h4>Voice-Based Encryption</h4>

              <p>
                Developed a secure data storage solution using
                Java, JDBC and SQL.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;