import { PropTypes } from 'prop-types';
import { CircleLogo } from './circleLogo';

import rightArrow from '../../public/icons/right-arrow.svg'

import './projectMini.css'

export const ProjectMini = ({projectDTO = {}, handleViewMoreClick}) => {
    return (
        <div className="project-mini">
            <div className="project-highlights">
                <CircleLogo title = {projectDTO.title} logoUrl = {projectDTO.logoUrl} />
                <div className="project-intro">
                    <h2>{projectDTO.title}</h2>
                    <h4>{projectDTO.keywords.join(', ')}</h4>
                </div>
            </div>
            <div>
                <a href={`/project/${projectDTO._id}`} onClick={(e) => {
                    e.preventDefault(); // Evita la navegación predeterminada del enlace
                    handleViewMoreClick(projectDTO._id);
                }}>
                    <img src={rightArrow} className="view-more-arrow" alt="view-more-arrow" />
                </a>
            </div>
        </div>
    );
}

ProjectMini.propTypes = {
    projectDTO: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        logoUrl: PropTypes.string.isRequired,
    }),
    handleViewMoreClick: PropTypes.func.isRequired
}