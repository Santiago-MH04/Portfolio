import Header from './Header';
import Notice from './Notice';
import Introduction1 from './Introduction_1';
import { Catalog } from './Catalog';
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
                <Footer />
            </section>
        </>
      )
}

export default HomePage;