import React from 'react';
import Header from './Header';
import HiringContact from './HiringContact';
import Footer from './Footer';

import './contactMe.css'

function ContactMe() {
    return (
        <section className="mainBody">
            <Header />
            <section className="contact-me-info">

            </section>
            <HiringContact />
            <Footer />
        </section>
    );
}

export default ContactMe;