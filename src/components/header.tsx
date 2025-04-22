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
    <section>
      <div className="sections">
          <img src={HomeLogo} className="logo" alt="Home" />
          <img src={Profile} className="logo" alt="Profile" />
          <img src={Coding} className="logo" alt="Projects" />
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <div className="hiring">
          <img src={Moon} className="logo" alt="Dark" />
          <button className="hire-me-btn">
            <img src={Plus} className="logo" alt="Plus" /> Hire me
          </button>
      </div>
    </section>
  );
}

export default Header;