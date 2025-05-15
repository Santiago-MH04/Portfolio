import Arrow from '../../public/icons/pointing-arrow.svg'
import rightArrow from '../../public/icons/right-arrow.svg'

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleLogo } from './circleLogo';
import { findSingleProject, findRandomMiniatures } from '../services/ProjectService';

import './catalog.css'

export const Catalog = () => {
   const [ProjectsMini, setProjectsMini] = useState([]);
   const navigate = useNavigate(); //Hook para la navegación con React Router

   const getProjectsMini = async () => {
      const projectsMiniResponse = await findRandomMiniatures();
      setProjectsMini(projectsMiniResponse);
   }

   const handleViewMoreClick = (projectId) => {
        // Construye la URL de la página del proyecto completo
      const projectUrl = `/project/${projectId}`; // Ejemplo de ruta, ajústala según tu configuración

        // Redirige a la nueva página usando React Router
      navigate(projectUrl);

        // Si no estás usando React Router, puedes usar window.location.href:
      // window.location.href = projectUrl;
   }

   useEffect(() => {
       getProjectsMini();
   }, []);


    return (
        <div className="projects-section">
             <div className="projects-banner">
                <div className="projects-header projects-marker">
                    <ul>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="projects-link">
                    <button className="view-projects-btn">
                      View all <img src={Arrow} className="project-arrow" alt="view-all-arrow" />
                    </button>
                </div>
            </div>
            <div className="projects-list">
                {ProjectsMini.map(({title, keywords, logoUrl, _id}) => (
                    <div key={title} className="project-mini">
                        <div className="project-highlights">
                            <CircleLogo title = {title} logoUrl = {logoUrl} />
                            <div className="project-intro">
                                <h2>{title}</h2>
                                <h4>{keywords.join(', ')}</h4>
                            </div>
                        </div>
                        <div>
                            <a href={`/project/${_id}`} onClick={(e) => {
                                e.preventDefault(); // Evita la navegación predeterminada del enlace
                                handleViewMoreClick(_id);
                            }}>
                                <img src={rightArrow} className="view-more-arrow" alt="view-more-arrow" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

