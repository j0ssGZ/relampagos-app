import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Navbar = () => {
  return (
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
  )
}

export default Navbar