import HireMeBtn from './HireMeBtn'

import CV from '../../public/icons/curriculum-portfolio.svg'

import './btnShortcuts.css'

function BtnShortcuts(){
    return (
        <div className="shortcuts">
            <HireMeBtn />
            <button className="hire-me-btn resume">
              <img src={CV} className="logo" alt="cv" />
              <p>My CV</p>
            </button>
        </div>
    );
}

export default BtnShortcuts;