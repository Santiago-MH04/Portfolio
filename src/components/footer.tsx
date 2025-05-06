import LinkedIn from '../../public/icons/linkedin.svg'
import GitHub from '../../public/icons/github.svg'

import './footer.css'

function Footer() {
  return (
    <section className="footer">
      <div className="media">
        <ul>
          <li>
            <h2>Follow me</h2>
          </li>
        </ul>
        <div className="mediaIcons">
          <div className="circle">
            <a href="https://github.com/Santiago-MH04" target="_blank">
                <img src={GitHub} title="GitHub profile" className="logo network github" alt="GitHub icon" />
            </a>
          </div>
          <div className="circle">
            <a href="https://www.linkedin.com/in/santiago-marin-higuita-016676194" target="_blank">
                <img src={LinkedIn} title="LinkedIn profile" className="logo network linkedin" alt="LinkedIn icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        Santiago Marín Higuita - 2025
        <br />
        Medellín, Colombia
      </div>
    </section>
  );
}

export default Footer;
