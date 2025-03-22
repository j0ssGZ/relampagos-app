import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-relampagos.svg'
import WeatherWidget from "./WeatherWidget.tsx";

const Navbar = () => {
  return (
    <div>
      <WeatherWidget/>
      <nav className="navbar navbar-main">
        <ul className="nav-list">
          <li><Link to="/el-club">El club</Link></li>
          <li><Link to="/patrocinadores">Patrocinadores</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li>
            <Link to="/">
              <img src={logo} className="logo" alt="Relámpagos logo"/>
            </Link>
          </li>
          <li><Link to="/players">Calendario</Link></li>
          <li><Link to="/players">Tienda</Link></li>
          <li><Link to="/players">Contacto</Link></li>
        </ul>
      </nav>
      <nav className="navbar navbar-mobile">
        <div className="navbar-mobile-item">
          <span className="hide-on-menu-mobile-active">Área privada</span>
        </div>
        <div className="navbar-mobile-item">
          <Link to="/">
            <img src={logo} className="logo" alt="Relámpagos logo"/>
          </Link>
        </div>
        <div className="navbar-mobile-item">
          <span id={"menu-toggler"}>Menú</span>
        </div>
      </nav>
      <div id="navbar-mobile-menu" className="navbar-mobile-menu active">
        <ul className="nav-list">
          <li><Link to="/el-club">El club</Link></li>
          <li><Link to="/patrocinadores">Patrocinadores</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/players">Calendario</Link></li>
          <li><Link to="/players">Tienda</Link></li>
          <li><Link to="/players">Contacto</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar