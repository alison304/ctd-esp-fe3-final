import { Link } from "react-router-dom";
import { GoMoon } from "react-icons/go";
import "./Navbar.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //const navigate = useNavigate();
  return (
    <div className="navbar">
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
        <button className="btn-moon"><GoMoon /></button>
      </div>
    </div>
  );
};
export default Navbar;