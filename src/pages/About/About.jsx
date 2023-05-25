import imgBanner from "../../assets/images/aboutbannerDesktop.png";
/**
 * Stockage des différentes infos dans un fichier JSON
 */
import aboutData from "../../assets/data/aboutData.json";
import "./About.css";
/**
 * Importation des composants nécessaires
 */
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";

/**
 * Fonction qui met en place la banner de la page about ainsi que les différentes infos dans les collapse
 * @returns 
 */

function About() {
  return (
    <div className="about">
      <AboutBanner picture={imgBanner} />
      <div className="about__dropdowns">
         {/**
          * .map pour parcourir et attribuer un index aux infos dans le fichier JSON
          */}
        {aboutData.map((data, index) => {
          return (
            <Collapse key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
}

export default About;