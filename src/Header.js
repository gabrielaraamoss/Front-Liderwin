import "./assets/css/header.css";
import "./Servicio";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUser,
  FaDollarSign,
  FaHeart,
  FaShoppingCart
} from "react-icons/fa";

import logo from "./assets/images/logo-liderwin.png";

const Header = () => {
  const { error, isPending, data } = useFetch('http://localhost:3001/categorias');
  return (
    <div className='header' id="container">
      <div className="options">
        <ul id="contact">
          <li>
            <p><i><FaRegEnvelope /></i>
              ventas@liderwin.com
            </p>
          </li>
          <li>
            <p>
              <i>
                <FaPhoneAlt />
              </i>
              (+593) 950 518400
            </p>
          </li>
          <li>
            <p>
              <i>
                <FaMapMarkerAlt />
              </i>
              C.C. Buenavista Plaza B5 Local 5, Samborondón
            </p>
          </li>
        </ul>
        <ul id="options-personal">
          <li>
            <p>
              <i>
                <FaDollarSign />
              </i>
              USD
            </p>
          </li>
          <li>
            <p>
              <i>
                <FaUser />
              </i>
              Cuenta
            </p>
          </li>
        </ul>
      </div>
      <div className="buscador">
        <img id="logo" src={logo} />
        <form>
          <select className="input-select">
            {
              data && data.map((e) => (
                <option key={e.idCategoria} value={e.idCategoria}>{e.nombre}</option>
              ))
            }
          </select>
          <input className="input" placeholder="Buscar aquí"></input>
          <button className="search-btn">Buscar</button>
        </form>
        <div id="options-buy">
          <div id="container-options-buy">
            <i className="p">
              <FaHeart />
            </i>
            <a data-toggle="dropdown" aria-expanded="true">
              <span className="p">Mis Favoritos</span>
            </a>
            <i className="p">
              <FaShoppingCart />
            </i>
            <a data-toggle="dropdown" aria-expanded="true">
              <span className="p">Mi Carrito</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <ul className="navegador">
          <li className="active">
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/catalogo'>Catálogo</Link>
          </li>
          <li>
            <Link to='/servicios'>Servicios</Link>
          </li>
        
          <li>
            <Link to='/contactos'>Contacto</Link>
          </li>
          <li>
            <Link to='/equipo'>Equipo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
