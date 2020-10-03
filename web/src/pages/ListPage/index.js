import React from 'react';

import logoImg from '../../assets/images/scholaeYellow.png';

import './styles.css'

function ListPage(){
    return (
        <div id="list-page">
            <div className="container" id="list-page-content">
                <div className="header">
                    <div className="header-content">

                        <img src={logoImg} alt="Logo scholae"/>

                        <div className="header-menu">
                            <a href="/">
                                Opções 
                            </a>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
    )
}

export default ListPage; 