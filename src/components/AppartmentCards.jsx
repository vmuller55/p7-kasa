import "../assets/styles/AppartmentCards.css";
/*
*Fonction prenant en props '...apartment' généré dans le composant parent Home
*retourn les cards des appartements 
*/
function ApartmentCard(props) {
  return (
    <article className="article">
      <img className="article__image" src={props.cover} alt="Appartement" />
      <div className="article__title">{props.title}</div>
    </article>
  );
}

export default ApartmentCard;
