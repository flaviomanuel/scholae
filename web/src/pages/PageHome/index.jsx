import React from 'react';

import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';

import landingImg from '../../assets/images/homeFigure.png'

import './styles.css';

function PageHome() {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <PageHeader/>
               


                <main>
                    <div className="side-menu-content">
                        <SideMenu/>
                    </div>
                    <div className="landing">
                        <div className="landing-content">
                            <div className="landing-text">
                                <h1>Seu ponto de comunicação com a escola.</h1>
                                <p>Fique atualizado sobre os avisos escolares.</p>  
                            </div>
                        <img src={landingImg} alt="Imagen de apresentação"/>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default PageHome;