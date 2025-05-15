import { PropTypes } from 'prop-types';
import './circleLogo.css';

export const CircleLogo = ({title, logoUrl, className}) => {
    const bundledClassName = `circle-logo-project ${className || ''}`;
    return (
        <div className={bundledClassName}>
            <img title={title} src={logoUrl || null} className="project-logo" alt="P" />
        </div>
    );
}

CircleLogo.propTypes = {
    title: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    className: PropTypes.string,
}
CircleLogo.defaultProps = {
    className: '',
};