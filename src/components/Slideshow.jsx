// Import de useState. Le state local est présent à l’intérieur d’un composant
// et garde sa valeur, même si l'application se re-render
import { useState } from "react";

// Import du style
import "../assets/styles/Slideshow.css";

// Import des flèches
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";

// Composant fonction (enfant) "Slider" que l'on exporte dans le composant (parent) Apartment qui est une page à part entière
function Slideshow({ props }) {
  // Création du state "current" qu'on initialise à 0 et déclaration de la fct qui met à jour ce state
  const [current, updateCurrent] = useState(0);

  // Création de la variable "longueur" qui calcul la longueur de "props"
  // soit le nombre de "pictures" dans la page appartement
  const length = props.length;

  // Maj de current avec la fonction qui prend pour argument une ternaire
  // Si current est à length (total) - 1 on le passe à 0 (1ere img) sinon on fait +1 (suivant)
  const nextSlide = () => {
    updateCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    updateCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Ce composant "render", retourne ce qui suit ?????????????????????????????
  // Une div stylisé avec chaque photo mappée que l'on peut consulter grâce aux flèches
  return (
    <div className="slideshow">
      {props.map((picture, index) => {
        return (
          /* Pour chaque photo du tableau "pictures" on renvoit une div */
          <div
            key={index}
            // Si l'index de la photo est strictement égale à "current" on applique la classe "active" sinon la classe "inactive"
            className={index === current ? "slideshow__active-picture" : ""}
          >
            {/* Contenu de la div : on mappe et affiche la photo dont l'index correspond à "current" */}
            {index === current && (
              <img
                src={picture}
                alt="Appartement"
                className="slideshow__picture"
              />
            )}
          </div>
        );
      })}
      {/* affichage du bouton s'il y a plus d'une photo.
      La src ce sont les svg et au clique on appele les variables d'expression qui mettent à jour le state */}
      {length > 1 ? (
        <>
          <div className="slideshow__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slideshow__previous-icon" />
          </div>
          <div className="slideshow__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slideshow__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Slideshow;