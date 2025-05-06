import './introduction_1.css'

function Introduction_1(){
    return (
        <div className="part1">
            <div className="introduction">
                <h2>I’m Santiago Marín Higuita</h2>
                Software developer from Medellín, Colombia.
                <div className="shortcuts">
                    <button className="hire-me-btn">
                      <img src="{Plus}" className="logo" alt="Plus" />
                      <p>Hire me</p>
                    </button>
                    <button className="hire-me-btn resume">
                      <img src="{Plus}" className="logo" alt="cv" />
                      <p>My CV</p>
                    </button>
                </div>
            </div>
            <div className="avatar">
                Aquí va la foto
            </div>
        </div>
    );
}

export default Introduction_1;
