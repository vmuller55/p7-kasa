import "./Collapse.css";
import arrowdown from "../../assets/images/dropdown-arrow-desktop.png";
/**
 * Importation de useState
 */
import { useState } from "react";


/**
 * 
 * @param {*} param0 Props de l'élément parent About
 * @returns 
 */
function Collapse({ content, title }) {
  /**
   * Constante d'état isOpen initialisé en "false" / setIsOpen nous permet de vérifier l'état
   */
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div
        className={`collapse__content ${
          !isOpen ? "collapse__content--margin" : ""
        }`}
        /**
         * Utilisation de setIsOpen pour changer l'état de isOpen en utilsant onClick
         */
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="collapse__title">{title}</div>
        <img
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--rotate" : ""
          }`}
          src={arrowdown}
          alt=""
        />
      </div>
      {/**
       * Vérification si la variable isOpen est true et affiche le texte dans ce cas, sinon il est "caché"
       */}
      <div className={isOpen ? "collapse__text" : "collapse__hide"}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;