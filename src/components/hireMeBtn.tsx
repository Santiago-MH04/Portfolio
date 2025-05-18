import React from 'react'
import { useNavigate } from 'react-router-dom'

import Plus from '../../public/icons/plus-circle.svg'

import './hireMeBtn.css'

function HireMeBtn() {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
        // Construye la URL de la página a la cual redirigir
    const contactMeUrl = "/contact-me";
        // Redirige a la nueva página usando React Router
    navigate(contactMeUrl);
  };

  return (
    <button className="hire-me-btn" onClick={(e) => {
        e.preventDefault(); // Evita la navegación predeterminada del enlace
        handleHireMeClick();
    }}>
      <img src={Plus} className="logo" alt="Plus" />
      <p>Hire me</p>
    </button>
  );
}

export default HireMeBtn;