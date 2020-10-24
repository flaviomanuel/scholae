import React from 'react';
import  { HeaderContainer, HeaderContent, HeaderLogo } from './styles'

import DropdownMenu from './components/DropdownMenu';

import logoImg from '../../assets/images/scholaeYellow.png';

function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLogo src={logoImg}/>

                <DropdownMenu/>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header; 