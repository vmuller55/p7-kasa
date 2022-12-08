import "../../assets/styles/Home.css";
import bannerImg from "../../assets/images/bannerImg.jpeg";
/**
 * Importation des composants de la page Home
 */
import Banner from "../../components/Banner";
import AppartmentCard from "../../components/AppartmentCards";
/**
 * Importation du fichier JSON contenant les informations des appartements
 */
import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";

/**
 * Fonction permettant de générer les éléments HTML de la page Home
 * @returns les cards des appartements dans un lien menant à leurs page respective
 */
function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      {/**
       * Mise en place de la banner, utilisation de title et de picture pour les passer en prop dans l'élément enfant
       */}
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
         {/**
          * .map nous permet de parcourir les éléments de notre fichier json 
          */}
        {data.map((apartment) => {
          return (
            <Link
              className="main__link"
              /**
               * Redirection vers /apartment/id comme utilisé dans le routing
               */
              to={`/apartment/${apartment.id}`}
              key={apartment.id}
              title={apartment.title}
            >
              <AppartmentCard {...apartment} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
