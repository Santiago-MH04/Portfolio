import { PropTypes } from 'prop-types';
import './notice.css';

export const Notice = ({metier, availability}) => {
  const metierText = metier ?? "Software Developer"
  const availabilityText = availability ?? "AVAILABLE FOR WORK"

  return (
    <section className="notice">
        <div className="metier">
            <ul>
                <li>
                    {metierText}
                </li>
            </ul>
        </div>
        <div className="availability">
            {availabilityText && (
              <ul>
                <li>{availabilityText}</li>
              </ul>
            )}
        </div>
    </section>
  );
}

Notice.propTypes = {
  metier: PropTypes.string, // La prop 'metier' es un string opcional
  availability: PropTypes.string, // La prop 'metier' es un string opcional
};
Notice.defaultProps = {
    metier: "Software Developer",
    availability: "AVAILABLE FOR WORK",
};