import React from 'react';

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
           <a href="/">Acessar salas</a>
            <a href="/">Registar aviso</a>
          </div>
        </main>

        <footer>

          <div className="footer-group">
            <p>Copyright © 2020 - Tocatins</p>
            <p>Design and development by Scholae’s Team</p>
          </div>
          
        </footer>
       </div>
     </div>
    )
}

export default HomePage;