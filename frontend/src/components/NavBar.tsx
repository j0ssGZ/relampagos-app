import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-relampagos.svg'
import menuIcon from '../assets/ico/open-menu.svg'
import closeIcon from '../assets/ico/close-menu.svg'
import instagramIcon from '../assets/ico/ig-w.svg'
import WeatherWidget from "./WeatherWidget.tsx";
import { useEffect } from 'react';
import anime from 'animejs';

const Navbar = () => {
  useEffect(() => {
    const menuMobileToggler = document.querySelector('#menu-mobile-toggler')
    const navbarMobileLink = document.querySelector('#navbar-mobile-menu .nav-list a')
    const topLogo = document.querySelector('.navbar-mobile-item > a')

    const showMenuAnimation = anime.timeline({
      easing: "easeOutCubic",
      autoplay: false
    })

    showMenuAnimation
      .add({
          targets: '.hide-on-menu-mobile-active',
          opacity: [1, 0],
          duration: 150,
        },
        200
      )
      .add({
          targets: '#navbar-mobile-menu',
          height: [0, "100dvh"],
          duration: 1,
        },
        "-=350"
      )
      .add({
          targets: '#navbar-mobile-menu',
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 500,
        },
        "-=350"
      )
      .add({
          targets: "#menu-mobile-toggler img:nth-child(2)",
          opacity: [0, 1],
          duration: 300
        },
        "-=350"
      )
      .add({
          targets: "#menu-mobile-toggler img:nth-child(2)",
          rotate: ["0deg", "90deg"],
          duration: 300,
        },
        "-=350"
      )
      .add(
        {
          targets: "#navbar-mobile-menu ul li",
          translateX: [20, 0],
          opacity: [0, 1],
          duration: 300,
          delay: (_el, i) => i * 120
        },
        "-=275"
      )

    menuMobileToggler?.addEventListener("click", () => {
      if (showMenuAnimation.began) {
        showMenuAnimation.reverse()
        showMenuAnimation.play()
        if (
          showMenuAnimation.progress === 100 &&
          showMenuAnimation.direction === "reverse"
        ) {
          showMenuAnimation.completed = false
        }
      } else if (showMenuAnimation.paused) {
        showMenuAnimation.play()
      }
    })

    const closeMenuEventListener = () => {
      if (showMenuAnimation.began && !showMenuAnimation.reversed) {
        showMenuAnimation.reverse()
        showMenuAnimation.play()
        if (
          showMenuAnimation.progress === 100 &&
          showMenuAnimation.direction === "reverse"
        ) {
          showMenuAnimation.completed = false
        }
      }
    }

    navbarMobileLink?.addEventListener("click", closeMenuEventListener)
    topLogo?.addEventListener("click", closeMenuEventListener)
  })
  
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
        <div id="menu-mobile-toggler" className="navbar-mobile-item">
          <span id={"menu-toggler"}>
            <img src={menuIcon} alt="Menu"/>
            <img src={closeIcon} alt="Close"/>
          </span>
        </div>
      </nav>
      <div id="navbar-mobile-menu" className="navbar-mobile-menu">
        <div className="stars-column"><span></span></div>
        <ul className="nav-list">
          <li><Link to="/el-club">El club</Link></li>
          <li><Link to="/patrocinadores">Patrocinadores</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/players">Calendario</Link></li>
          <li><Link to="/players">Tienda</Link></li>
          <li><Link to="/players">Contacto</Link></li>
        </ul>
        <div className="social-media-items">
          <a href="https://www.instagram.com/relampagos_pontevedra">
            <img src={instagramIcon} alt="Instagram"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar