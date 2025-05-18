import Header from './Header';
import Notice from './Notice';
import Introduction1 from './Introduction_1';
import { Catalog } from './Catalog';
import HiringContact from './HiringContact';
import Footer from './Footer';

import './homePage.css';

function HomePage() {
    return (
        <>
            <section className="mainBody">
                <Header />
                <Notice />
                <Introduction1 />
                <Catalog />
                <HiringContact />
                <Footer />
            </section>
        </>
      )
}

export default HomePage;