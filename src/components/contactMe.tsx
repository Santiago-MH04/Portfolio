import React from 'react';
import Header from './Header';
import { Notice } from './Notice';
import Footer from './Footer';

import './contactMe.css'

function ContactMe() {
    return (
        <section className="mainBody">
            <Header />
            <Notice metier="Hire me" />
            <section className="contact-me-info">
                <div className="contact-me-title">
                    <h2>Coding inquiry</h2>
                    Want to get in touch? Reach out now
                </div>
                <form className="contact-me-form">
                    <div className="from-info">
                        <input type="text" id="name" value="" placeholder="Name"></input>
                        <input type="text" id="email" value="" placeholder="Email address"></input>
                    </div>
                    <div>
                        <textarea rows="10" id="message" value="" placeholder="message"></textarea>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </section>
            <Footer />
        </section>
    );
}

export default ContactMe;