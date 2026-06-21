import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <div className="section-title text-center mb-5">
          <span>TECH STACK</span>
          <h2>Technical Skills</h2>
          <p>
            Technologies and tools I use to build scalable applications.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <h4>
  <FaLaptopCode className="skill-icon" />
  Frontend
</h4>
              <div className="skill-pill">Angular</div>
              <div className="skill-pill">React</div>
              <div className="skill-pill">HTML5</div>
              <div className="skill-pill">CSS3</div>
              <div className="skill-pill">Bootstrap</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <h4>
  <FaServer className="skill-icon" />
  Backend
</h4>
              <div className="skill-pill">Java</div>
              <div className="skill-pill">Spring Boot</div>
              <div className="skill-pill">Node.js</div>
              <div className="skill-pill">REST APIs</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <h4>
  <FaDatabase className="skill-icon" />
  Database
</h4>
              <div className="skill-pill">SQL</div>
              <div className="skill-pill">MongoDB</div>
              <div className="skill-pill">MySQL</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <h4>
  <FaTools className="skill-icon" />
  Tools
</h4>
              <div className="skill-pill">Git</div>
              <div className="skill-pill">GitHub</div>
              <div className="skill-pill">Postman</div>
              <div className="skill-pill">ServiceNow</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;