import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProjectMini } from './ProjectMini';
import { /* findSingleProject, */ findRandomMiniatures } from '../services/ProjectService';

import Arrow from '../../public/icons/pointing-arrow.svg'

import './catalog.css'

export const Catalog = () => {
   const [ProjectsMini, setProjectsMini] = useState([]);
   const navigate = useNavigate(); // Hook para la navegación con React Router

   const getProjectsMini = async () => {
      const projectsMiniResponse = await findRandomMiniatures();
      setProjectsMini(projectsMiniResponse);
   }

  const handleViewMoreClick = (projectId) => {
        // Construye la URL de la página del proyecto completo
      const projectUrl = projectId ? `/project/${projectId}` : '/projects'; // Usa '/projects' si no hay projectId, y te manda a ver todos los proyectos
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
                    <button className="view-projects-btn" onClick={(e) => {
                        e.preventDefault(); // Evita la navegación predeterminada del enlace
                        handleViewMoreClick();
                    }}>
                      View all <img src={Arrow} className="project-arrow" alt="view-all-arrow" />
                    </button>
                </div>
             </div>
            <div className="projects-list">
                {ProjectsMini.map(project => {
                    return (<ProjectMini projectDTO={project} key={project._id} handleViewMoreClick={handleViewMoreClick} />)
                })}
            </div>
        </div>
    );
}

