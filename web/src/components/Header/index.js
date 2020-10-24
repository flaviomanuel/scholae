import React from 'react';

import logoImg from '../../assets/images/scholaeYellow.png';
import DropdownMenu from '../DropdownMenu';

import './styles.css'

function Header() {
    return (
        <div className="header">
            <div className="header-content">

                <img src={logoImg} alt="Logo scholae"/>

                <DropdownMenu/>
            </div>
       
     </div>
    )
}

export default Header; 