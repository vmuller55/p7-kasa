import "./Slideshow.css";
import arrowLeft from "../../assets/images/arrowLeft.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import { useState } from "react";

/**
 * Fonction qui met en place la gallerie d'image
 * @param {*} param0 Prends en props les pictures passés dans l'ételement parent Appartment
 * @returns 
 */
function Slideshow({ props }) {
  
  const [current, updateCurrent] = useState(0);
  /**
   * Stockage du nombre d'image dans une constante
   */
  const length = props.length;
  /**
   * Permet de mettre à jour la valeur state (current)
   */
  const nextSlide = () => {
    updateCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    updateCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slideshow">
      {/**
       * .map parcour les photos et créer les éléments HTML relatif pour chacune d'elle
       */}
      {props.map((picture, index) => {
        return (
          <div
            key={index}
            /**
             * Application de la classe si l'index correspond au current / la photo affichée
             */
            className={index === current ? "slideshow__active-picture" : ""}
          >
            {/**
             * Affichage de la photo si l'index correspond au current / la photo affichée 
            */}
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
      {/**
       * Vérification de la longueur, permet de na pas afficher les flèches si il n'y a qu'une photo
       * Utilisation des fonctions prevSlide et nextSlide déclarées en amont sur le clique
       */}
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