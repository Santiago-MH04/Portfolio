import Arrow from '../../public/icons/pointing-arrow.svg'
import rightArrow from '../../public/icons/right-arrow.svg'

import React, { useEffect, useState } from 'react';
import { findSingleProject, findRandomMiniatures } from '../services/ProjectService';

import './catalog.css'

export const Catalog = () => {
   const [ProjectsMini, setProjectsMini] = useState([]);
   const [Project, setProject] = useState({});

   const getProjectsMini = async () => {
      const projectsMiniResponse = await findRandomMiniatures();
      setProjectsMini(projectsMiniResponse);
   }

   const getFullProject = async (id) => {
       const fullProject = await findSingleProject(id);
       setProject({...fullProject});
   }

   useEffect(()=>{
       getProjectsMini();
       /* getFullProject(id); */
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
                            <div className='circle-logo-project'>
                                <img title={title} src={logoUrl} className="project-logo" alt="P" />
                            </div>
                            <div className="project-intro">
                                <h2>{title}</h2>
                                <h4>{keywords.join(', ')}</h4>
                            </div>
                        </div>
                        <div>
                            Aquí, redirige a la página con el proyecto completo
                            <a href="#">
                                <img src={rightArrow} className="view-more-arrow" alt="view-more-arrow" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

