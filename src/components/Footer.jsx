import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Marcus Ribeiro 2024.</p>
      <div>
        <Link
          to="https://github.com/MarcusRibeiroDev/library_free"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github px-4"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/marcus-dev-ribeiro?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
