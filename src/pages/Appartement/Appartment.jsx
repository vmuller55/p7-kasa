import "./Appartment.css";
/**
 * Importation de useParams pour récuperer l'id de l'url 
 * Importation de useNavigate pour mettre en place une redirection en cas d'érreur sur l'Id
 */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../assets/data/data.json";
/**
 * Importation des composants nécessaires
 */
import Slideshow from "../../components/SlidesShow/Slideshow";
import ApartmentTag from "../../components/AppartmentTag/AppartmentTag";
import Collapse from "../../components/Collapse/Collapse";
import Rate from "./../../components/Rate/Rate";
import HostName from "./../../components/HostName/HostName";

/**
 * Fonction qui va dans un premier temps vérifier si l'id de l'URL est correcte puius ensuite va générer le contenu HTML relatif aux appartements
 * @returns 
 */
function Apartment() {
  /**
   * L'id est stocké dans une constante
   */
  const { productId } = useParams();
    /**
   * useNavigate est placé dans une constante
   */
    const navigate = useNavigate();
  /**
   * Vérification que l'id correspond a celui de data
   */
  const apartment = data.find((apartment) => apartment.id === productId);
  /**
   * Vérification que l'id est bien définit et existant 
   */
  useEffect(() => {
    if(apartment === undefined) {
      return navigate('Error404')
    }
  });
/**
 * Si l'id est bien existant return les éléments HTML relatif
 */
  if (apartment) {
    const { title, location, rating, host, equipments, description, pictures } =
    apartment;
    return (
      <section className="apartment">
        <Slideshow props={pictures} />
        <div className="apartment__content">
          <div className="apartment__informations">
            <h1 className="apartment__title">{title}</h1>
            <p className="apartment__location">{location}</p>
            <div className="apartment__tags">
              {/**
               * .map récupère les diffents tag et les passe en prop pour l'élément ApartmentTag
               */}
              {apartment.tags.map((tag, index) => (
                <ApartmentTag key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="apartment__rating-and-host">
            <Rate rating={rating} />
            <HostName host={host} />
          </div>
        </div>
        <div className="apartment__dropdowns">
          <Collapse title="Description" content={description} />
          <Collapse
            title="Equipements"
            content={equipments.map((equipment, index) => (
              <li className="apartment__dropdowns__list" key={index}>
                {equipment}
              </li>
            ))}
          />
        </div>
      </section>
    )
  }
}

export default Apartment;