import "../assets/styles/Banner.css";

/**
 * Fonction qui met en place le code HTML correspondant à la Banner
 * @param {any} param0 Prends en paramètre les props de l'élément parent Home 
 * @returns 
 */
function Banner({ title, picture }) {
  return (
    <div className="wrapper-banner">
      <img
        className="wrapper-banner__img"
        src={picture}
        alt="Paysage montagneux"
      />
      <div className="wrapper-banner__background">
        <div className="wrapper-banner__title">{title}</div>
      </div>
    </div>
  );
}

export default Banner;