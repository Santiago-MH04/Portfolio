import { useNavigate } from 'react-router-dom'

import HireMeBtn from './HireMeBtn'

import HomeLogo from '../../public/icons/home.svg'
import Profile from '../../public/icons/profile.svg'
import Coding from '../../public/icons/coding.svg'
import Moon from '../../public/icons/moon-night-base.svg'

import './header.css';

function Header() {
  const navigate = useNavigate(); //Hook para la navegación con React Router

  const handleDispatchClick = (param = "") => { //Por defecto, redirige a la página principal
      // Construye la URL de la página a la que debe redirigir
    const projectUrl = `/${param}`;
      // Redirige a la nueva página usando React Router
    navigate(projectUrl);
  }

  const handleHireMeClick = () => {
      // Construye la URL de la página a la cual redirigir
    const hireMeUrl = "/contact-me";
      // Redirige a la nueva página usando React Router
    navigate(hireMeUrl);
  }

  return (
    <section className="header">
      <div className="sections">
        <a href={`/`} onClick={(e) => {
            e.preventDefault(); // Evita la navegación predeterminada del enlace
            handleDispatchClick();
        }}>
          <img title="Home" src={HomeLogo} className="logo home" alt="Home" />
        </a>
        <a href={`/about-me`} onClick={(e) => {
            e.preventDefault();
            handleDispatchClick("about-me");
        }}>
          <img title="About me" src={Profile} className="logo about" alt="Profile" />
        </a>
        <a href={`/projects`} onClick={(e) => {
            e.preventDefault();
            handleDispatchClick("projects");
        }}>
          <img title="Projects" src={Coding} className="logo projects" alt="Projects" />
        </a>
          {/* <img title="Home" src={HomeLogo} className="logo home" alt="Home" />
          <img title="About me" src={Profile} className="logo about" alt="Profile" />
          <img title="Projects" src={Coding} className="logo projects" alt="Projects" /> */}
      </div>
      <div className="hiring">
          <img title="Dark mode" src={Moon} className="logo theme" alt="Dark" />
          <HireMeBtn />
      </div>
    </section>
  );
}

export default Header;