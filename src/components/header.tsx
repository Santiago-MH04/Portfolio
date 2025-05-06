/* import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg' */

import HomeLogo from '../../public/icons/home.svg'
import Profile from '../../public/icons/profile.svg'
import Coding from '../../public/icons/coding.svg'
import Moon from '../../public/icons/moon-night-base.svg'
import Plus from '../../public/icons/plus-circle.svg'

import './header.css';

function Header() {
  return (
    <section className="header">
      <div className="sections">
          <img title="Home" src={HomeLogo} className="logo home" alt="Home" />
          <img title="About me" src={Profile} className="logo about" alt="Profile" />
          <img title="Projects" src={Coding} className="logo projects" alt="Projects" />
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <div className="hiring">
          <img title="Dark mode" src={Moon} className="logo theme" alt="Dark" />
          <button className="hire-me-btn">
            <img src={Plus} className="logo" alt="Plus" />
            <p>Hire me</p>
          </button>
      </div>

    </section>
  );
}

export default Header;