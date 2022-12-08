import redstar from "../assets/images/redStar.svg";
import greystar from "../assets/images/greyStar.svg";
import "../assets/styles/Rate.css";
/**
 * 
 * @param {*} props  Fonction qui prends en prop props de l'élément parent Apartment
 * @returns le HTML relatif à la notation 
 */
function Rate(props) {
  /**
   * Stockage de la note dans une constante
   */
  const rating = props.rating;
  /**
   * Mise en place array pour le nombre d'étoile
   */
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/**
       * .map de l'array stars puis vérification de sa valeur
       */}
      {stars.map((star) =>
        rating >= star ? (
          /**
           * Attribution de redstar pour la valeur de rating  
           */
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          /**
           * Attribution de greystar pour le reste
           */
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
}

export default Rate;