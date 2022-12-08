import "../assets/styles/Footer.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
/**
 * Fonction utilsant Link sur le Logo pour retourner à la page d'acceuil 
 * @returns HTML relatif au footer
 */
function Footer() {
  return (
    <footer className="footer">
      <Link className="footer__logo" to="/">
        <Logo fill="#ffffff" className="logo" />
      </Link>

      <div className="footer__mentions">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;