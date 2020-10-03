import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import logoImg from '../../assets/images/scholaeYellow.png';

import './styles.css';

function HomePage(){
    return  (
     <div id="home-page">
       <div className="container" id="page-home-content">

         <header className="logo-container">
          <img src={logoImg} alt="logo scholae"/>
         </header>
        
        <main>
          <div className="buttons-group">
           <Link to="/list-message">Acessar salas</Link>
            <Link to="/login">Registar aviso</Link>
          </div>
        </main>

        <Footer/>

       </div>
     </div>
    )
}

export default HomePage;