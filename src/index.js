import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Importation de react-rooter pour mettre en place le routing de l'application web
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/index.css';
import './assets/styles/normalize.css'
/**
 * Importation des diférentes pages appelés avec les routes
 */
import Home from './pages/Home/Home';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/About/About.jsx'
import Error404 from './pages/Error404/Error404.jsx';
import Appartment from './pages/Appartement/Appartment.jsx';


/**
 * Implémentation des routes dans le fichier HTML 
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="apartment/:productId" exact strict element={<Appartment />} />
        {/**
         * Ici 'path"*"' nous permet de renvoyer les URL non définits à notre page d'érreur 
         */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
