import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      {/* Renvoie à l'accueil en cliquant dessus */}
      <Link className="footer__logo" to="/">
        <Logo fill="#ffffff" className="logo" />
      </Link>

      <div className="footer__mentions">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;