import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Importation de react-rooter pour mettre en place le routing de l'application web
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './assets/styles/normalize.css'
/**
 * Importation des diférentes pages appelés avec les routes
 */
import Home from './pages/Home/Home';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About/About.jsx'
import Error404 from './pages/Error404/Error404.jsx';
import Appartment from './pages/Appartement/Appartment.jsx';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
