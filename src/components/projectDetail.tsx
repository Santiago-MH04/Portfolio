import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findSingleProject } from '../services/ProjectService';

import Header from './Header';
import { CircleLogo } from './circleLogo';
import Footer from './Footer';

import Arrow from '../../public/icons/pointing-arrow.svg'

    /* import './homePage.css'; */
import './projectDetail.css';


function ProjectDetail() {
    const { id } = useParams(); // Obtiene el valor del parámetro 'id' de la URL
    /* console.log("ID del proyecto en ProjectDetail:", id); */
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      try {
          const data = await findSingleProject(id);
          /* console.log("✅ Data found from the backend:", data); */
          setProject(data);
      } catch (err) {
          /* setError('Error loading the project.'); */
          /* console.error("❌ Error in the request:", err); */
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchProject();
    }, [id]); // Dependencia en 'id' para que se vuelva a ejecutar si el ID cambia

    if (loading) {
      return <p>Loading project details...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (!project) {
      return <p>Project not found.</p>;
    }

    return (
        <section className="mainBody">
            <Header />
            <section className="project-info">
                <div className="project-summary">
                    <CircleLogo
                        title = {project.title}
                        logoUrl = {project.logoUrl}
                        className = "project-detail-logo"
                    />
                    <h1>{project.title}</h1>
                    {project.description}
                    <button className="hire-me-btn view-project-repo-btn">
                      <p>Visit repo</p>
                      <img src={Arrow} className="project-arrow" alt="go-to-repo" />
                    </button>
                    <div className="project-img">
                        <img src={project.imageUrls[0]} className="project-img" alt="project-img-1" />
                    </div>
                </div>
                <div className="project-chapter-1">
                    <h2>Problems to solve</h2>
                    {project.needsToFix}
                    <div className="project-img">
                        <img src={project.imageUrls[1]} className="project-img" alt="project-img-2" />
                    </div>
                </div>
                <div className="project-chapter-2">
                    <h2>My solution</h2>
                    {project.solutionsProposed}
                    <div className="project-img">
                        <img src={project.imageUrls[2]} className="project-img" alt="project-img-3" />
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
}

export default ProjectDetail;