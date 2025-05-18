import React from 'react';
import Header from './Header';
import HiringContact from './HiringContact';
import Footer from './Footer';

import './aboutMe.css'

function AboutMe() {
    return (
        <section className="mainBody">
            <Header />
                <section className="about-me-info">
                    <div className="hello">
                        <h1>It’s me, Santiago!</h1>
                        I am Santiago Marín Higuita, a fullstack software developer with over 2 years of experience, from Medellín, Colombia. I am deeply passionate about software development, especially in the backend, in order not to lose the capacity to amaze, I have found in the IT industry a way to build, not only the realisation of my dreams, but to help people solving their different problems.
                        <div className="project-img">
                            <img src="" className="project-img" alt="about-me-img-1" />
                        </div>
                    </div>
                    <div className="hello">
                        <h2>More About Me</h2>
                        I am a graduated Chemical Engineer from Universidad Nacional de Colombia, and currently a student of Mathematics at Universidad de Antioquia, and I am very much into learning how to apply technologies and I try to get involved in the last trends regarding coding. I am experienced using Java/Spring Boot for backend, and React framework for the frontend.technologies.
                        <br />
                        I my time of leisure, I find pleasure on reading, novels most of the time, watching and playing sports, and hiking every place I can reach.
                    </div>
                </section>
                <HiringContact />
            <Footer />
        </section>
    );
}

export default AboutMe;

