import React from 'react';
 
import logoImg from '../../assets/images/scholaeLogo.png';
import enterIcon from '../../assets/images/icons/login.svg';
import homeIcon from '../../assets/images/icons/home-run.svg';
import calendarIcon from '../../assets/images/icons/calendar.svg';

import './styles.css';

function PageHeader() {
    return (
        <div className="page-header">
            <header>
            <div className="logo-container">
                <img src={logoImg} alt="Scholae"/>
            </div>



            <div className="list-group">
                <div className="list">
                    <a href="/" >
                        <img src={enterIcon} alt="Acessar"/>
                        Acessar
                    </a>
                </div>

                <div className="list">
                    <a href="/" >
                        <img src={homeIcon} alt="Acessar"/>
                        Acessar
                    </a>
                </div>

                <div className="list">
                    <a href="/" >
                        <img src={calendarIcon} alt="Acessar"/>
                        20/20/2002
                    </a>
                </div>
            </div>
             </header>
             <section>
                <div class="line">
                </div>
            </section>
    </div>
    )
}

export default PageHeader;