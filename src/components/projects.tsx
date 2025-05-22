import Header from './Header';
import { Notice } from './Notice';
import HiringContact from './HiringContact';
import Footer from './Footer';

import './projects.css'

export const Projects = () => {
    return (
        <section className="mainBody">
            <Header />
            <Notice metier="Projects" availability=""/>
            <div className="my-works">
                <h2>My works</h2>
                Discover my portfolio, where efficient apps meet creative design. My work strives to inspire, and to help get in touch with much more valuable projects.
            </div>
            <HiringContact />
            <Footer />
        </section>
    );
}