import { PropTypes } from 'prop-types';
import './notice.css';

export const Notice = ({metier}) => {
  const metierText = metier ?? "Software Developer"

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
            <ul>
                <li>
                    AVAILABLE FOR WORK
                </li>
            </ul>
        </div>
    </section>
  );
}

Notice.propTypes = {
  metier: PropTypes.string, // La prop 'metier' es un string opcional
};
Notice.defaultProps = {
    metier: "Software Developer",
};