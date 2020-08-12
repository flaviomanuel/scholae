import React from 'react';

import arrowIcon from '../../assets/images/icons/arrow.svg'

import './styles.css';

function SideMenu() {
    return (
        <div id="side-menu">
            <div className="options-group">
                <div className="option">
                    <a href="/">
                        1º ano A
                        <img src={arrowIcon} alt="seta"/>
                    </a>
                </div>
                <div className="option">
                    <a href="/">
                        1º ano B
                        <img src={arrowIcon} alt="seta"/>
                    </a>
                </div>
                <div className="option">
                    <a href="/">
                        2º ano A
                        <img src={arrowIcon} alt="seta"/>
                    </a>
                </div>
                <div className="option">
                    <a href="/">
                        2º ano B
                        <img src={arrowIcon} alt="seta"/>
                    </a>
                </div>
                <div className="option">
                    <a href="/">
                        3º ano A
                        <img src={arrowIcon} alt="seta"/>
                    </a>
                </div>
                <div className="option">
                    <a href="/">
                        3º ano B
                        <img src={arrowIcon} alt="seta"/>
                    </a>
                </div>
            </div>
        </div>
    )   
}

export default SideMenu;