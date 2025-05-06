import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header';
import Notice from './components/Notice';
import Footer from './components/Footer';
import Introduction1 from './components/Introduction_1';
import { Catalog } from './components/Catalog';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<Header />
    <Notice />
    <Introduction1 />
    <Catalog />
    <Footer />*/}
    <App />
  </StrictMode>,
)
