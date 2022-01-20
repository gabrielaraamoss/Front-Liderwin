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
  const { error, isPending, data } = useFetch(
    "http://localhost:3001/categorias"
  );
  return (
    <div>
      <div id="top-header">
        <div class="container">
          <ul class="header-links pull-left">
            <li>
              <a href="#">
                <i class="fa fa-envelope-o"></i> ventas@liderwin.com
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-phone"></i> (+593) 950 518400
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-map-marker"></i> C.C. Buenavista Plaza B5 Local
                5, Samborondón
              </a>
            </li>
          </ul>
          <ul class="header-links pull-right">
            <li>
              <a href="#">
                <i class="fa fa-dollar"></i>USD
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-user-o"></i>Mi Cuenta
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="header">
        <div class="container">
          <div class="row">
            <span>
              <div class="col-md-3">
                <div class="header-logo">
                  <a href="index.html" class="logo">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
            </span>

            <span>
              <div class="col-md-6">
                <div class="header-search">
                  <form>
                    <select class="input-select">
                      <option value="0">Categorías</option>
                    </select>
                    <input class="input" placeholder="Buscar aquí" />
                    <button class="search-btn" type="button">
                      Buscar
                    </button>
                  </form>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <nav id="navigation">
        <div class="container">
          <div id="responsive-nav">
            <ul class="main-nav nav navbar-nav">
              <li class="active">
                <a>
                  <Link to="/">Inicio</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/catalogo">Catálogo</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/servicios">Servicios</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/contactos">Contacto</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/equipo">Equipo</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
