import React from 'react';
import  { HeaderContainer, HeaderContent, HeaderLogo } from './styles'

import DropdownMenu from './components/DropdownMenu';

import logoImg from '../../assets/images/scholaeYellow.png';

function Header({classrooms}) {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLogo src={logoImg}/>

                <DropdownMenu classrooms={classrooms}/>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header; 