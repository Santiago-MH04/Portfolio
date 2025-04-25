import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header';
import Notice from './components/Notice';
import Footer from './components/Footer';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Notice />
    <App />
    <Footer />
  </StrictMode>,
)
