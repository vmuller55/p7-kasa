import "./Error404.css";
import { Link } from "react-router-dom";

/**
 * Fonction qui affiche la page d'érreur et met en place un lien vers la page Home
 * @returns Le HTML relatif à la page d'érreur
 */
function Error404() {
  return (
    <div className="wrapper-error">
      <div className="wrapper-error__number">404</div>
      <div className="wrapper-error__msg">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link
        className="wrapper-error__back-link"
        to="/"
        title="Retour page d'accueil"
      >
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;