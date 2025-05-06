import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Notice from './components/Notice';
import Introduction1 from './components/Introduction_1';
import { Catalog } from './components/Catalog';
import Footer from './components/Footer';

function App() {
  /* const [count, setCount] = useState(0) */

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

export default App
