import "../assets/styles/AboutBanner.css";

/**
 * Fonction qui met en place le code HTML correspondant à la Banner de la page About
 * @param {any} param0 Prends en paramètre les props de l'élément parent About 
 * @returns 
 */
function AboutBanner({ picture }) {
  return (
    <div className="wrapper-aboutBanner">
      <img
        className="wrapper-aboutBanner__img"
        src={picture}
        alt="Paysage montagneux"
      />
      <div className="wrapper-aboutBanner__background"></div>
    </div>
  );
}

export default AboutBanner;