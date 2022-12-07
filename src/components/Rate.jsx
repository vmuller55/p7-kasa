import redstar from "../assets/images/redStar.svg";
import greystar from "../assets/images/greyStar.svg";

import "../assets/styles/Rate.css";

function Rate(props) {
  const rating = props.rating;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {/* On map l'array "stars" et on compare avec la note fournit dans data
      Si stars est > ou = on met une etoile rouge sinon grise */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
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