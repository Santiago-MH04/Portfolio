import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import Header from './Header';
import { Notice } from './Notice';
import Footer from './Footer';

import './contactMe.css'

    // Variables de entorno usando import.meta.env.NOMBRE_VARIABLE del archivo .env en la raíz del proyecto
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Verificar carga de las variables de entorno
console.log('EmailJS Service ID:', SERVICE_ID);
console.log('EmailJS Template ID:', TEMPLATE_ID);
console.log('EmailJS Public Key:', PUBLIC_KEY);

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [notification, setNotification] = useState({
        message: '',
        type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = {...formData, [name]: value};
            console.log(newFormData);   // Para ver cómo cambian los estados
            return newFormData;
        });
        console.log(formData); // Para ver el estado actualizado en cada cambio
    };

    const paramTemplates = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            paramTemplates,
            PUBLIC_KEY
        ).then(
            (result) => {
                    //Volver a poner el formulario en blanco
                setFormData({ name: '', email: '', message: '' });
                    //Mostrar alerta de éxito
                setNotification({
                    message: 'Email sent successfully!',
                    type: 'success'
                });
                setTimeout(() => setNotification({ message: '', type: '' }), 5000);  // Ocultar después de 5 segundos
            },
            (error) => {
                    //Mostrar alerta de error
                setNotification({
                    message: 'Error sending email. Please, contact me otherwise!',
                    type: 'error'
                });
                setTimeout(() => setNotification({ message: '', type: '' }), 5000);  // Ocultar después de 5 segundos
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            //Validar el formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setNotification({
                message: 'Please enter a valid email address',
                type: 'error'
            });
            return;
        }
            //Enviar el correo en caso de éxito
        sendEmail(e);
    };

    return (
        <section className="mainBody">
            <Header />
            <Notice metier="Hire me" />
            <section className="contact-me-info">
                <div className="contact-me-title">
                    <h2>Coding inquiry</h2>
                    Want to get in touch? Reach out now
                </div>
                <form
                    className="contact-me-form"
                    onSubmit={handleSubmit}
                >
                    <div className="from-info">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            rows="10"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="message"
                            required
                        />
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                {notification.message && (
                    <div className={`notification ${notification.type}`}>
                        {notification.message}
                    </div>
                )}
            </section>
            <Footer />
        </section>
    );
}

