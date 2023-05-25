import "./HostName.css";
/**
 * 
 * @param {*} param0 Fonction qui prends en prop host de 'élement parent Apartment
 * @returns Le HTML relatif au nom et prénom de l'hôte
 */
function HostName({ host }) {
 /**
  * Récupération du nom et du prénom de l'hote avec la méthode split
  */
  const hostSplitName = host.name.split(" ");
  /**
   * Attribution de name et lastname
   */
  const [name, lastname] = hostSplitName;

  return (
    <div className="host">
      <div className="host__name">
        <p>{name}</p>
        <p>{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
}

export default HostName;