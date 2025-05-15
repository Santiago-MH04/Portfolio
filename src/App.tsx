import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProjectDetail from './components/ProjectDetail';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Página principal */}
                <Route path="/about-me" element="" /> {/* Página con información personal */}
                <Route path="/projects" element="" /> {/* Página que lista todas las miniaturas */}
                <Route path="/project/:id" element={<ProjectDetail />} /> {/* Página que lista todas las miniaturas */}
                <Route path="/contact-me" element="" /> {/* Página con formulario para contacto */}
            </Routes>
        </Router>
    );
}

export default App;
