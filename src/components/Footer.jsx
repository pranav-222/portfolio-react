import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function Footer() {
  return (
    <footer>

      <div className="footer-social">

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/pranav-222"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:prnv222@gmail.com">
          <FaEnvelope />
        </a>

        <a href="tel:+919552116186">
          <FaPhone />
        </a>

      </div>
<h1 style={{ color: "red", textAlign: "center" }}>
  TEST FOOTER
</h1>
    </footer>
  );
}

export default Footer;