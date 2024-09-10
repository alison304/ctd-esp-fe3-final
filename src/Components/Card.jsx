import React from "react";
import { Link } from "react-router-dom";
import doctor from '/public/images/doctor.jpg';
import { useDentistStates } from "../Components/utils/Context";

const Card = ({ dentist }) => {
  const { setFavs } = useDentistStates();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((favs) => [...favs, dentist]);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={ doctor } alt="Logo" width="160" height="120" />
        <Link rel={"/detail/" + dentist.id} />
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
        <button onClick={addFav}>⭐</button>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
