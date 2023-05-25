import "./AppartmentTag.css";
/**
 * 
 * @param {*} param0 Prends en props getTag de l'élément parent appartement
 * @returns le HTML relatif aux Tags
 */
function ApartmentTag({ getTag }) {
  return (
    <div className="tag">
      <p className="tag__text">{getTag}</p>
    </div>
  );
}

export default ApartmentTag;
