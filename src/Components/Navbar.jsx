import { Link } from "react-router-dom";
import { GoMoon } from "react-icons/go";
import { FaRegSun } from "react-icons/fa6";
import { useDentistStates } from "../Components/utils/Context";
import "./Navbar.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useDentistStates();

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <nav className="navbar">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='title-logo'>
        <h1 className="title">DH Odonto</h1>
      </div>
      <div className="nav-rigth">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/favs">
          <h4>Favs</h4>
        </Link>
        {state.theme == "light" ? (
          <>
            <button className="btn-moon" onClick={changeTheme}><FaRegSun /></button>
          </>
        ) : (
          <>
            <button className="btn-moon" onClick={changeTheme}><GoMoon /></button>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;