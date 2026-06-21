import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-backend-0z5i.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.text();

      alert(result);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      alert("Backend connection failed");
      console.error(error);
    }
  };

  return (
    <section id="contact">

      <div className="container">

        <div className="contact-heading text-center">
          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Have a project? Let's solve it together.
          </p>
        </div>

        <div className="contact-form-wrapper">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="mb-4">
              <input
                type="text"
                id="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                rows="6"
                id="message"
                className="form-control"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;