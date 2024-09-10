import DH from '/public/images/DH.png';
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import "./Navbar.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //const navigate = useNavigate();
  return (
    <div className="navbar">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='logo'>
        <img src={ DH } alt="Logo" width="160" height="40" />
      </div>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/detail">
        <h4>Detail</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      <button>Change Theme<FaMoon /></button>
    </div>
  );
};
export default Navbar;