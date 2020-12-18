import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi'

import { 
    DropdownContainer, 
    FirstItem, 
    SubmenuContainer, 
    MenuContainer, 
    ArrowLeft, 
    LeftMenuContainer} from './styles';
    
import Submenu from '../Submenu/index'


function DropdownMenu() {
    const [active, setActive] = useState(false);
    const [activeTwo, setActiveTwo] = useState(false);

    function handleActive(){
            setActive(oldActive => (oldActive ? false : true ));
            if(activeTwo) {
                setActiveTwo(oldActive => (oldActive ? false : true)); 
            }
    }

    function handleActiveTwo() {
        setActiveTwo(oldActive => (oldActive ? false : true));
    }

    return (
        <DropdownContainer>
            <MenuContainer onClick={handleActive}>
                <FirstItem >Opções
                <BiChevronDown size="2rem" type="regular" />
                </FirstItem>
            </MenuContainer>

            <SubmenuContainer active={active}>
                <Submenu name="Home" to="/"/>
                <Submenu  name="Salas" icon={<ArrowLeft onClick={handleActiveTwo}/>} />                
                <Submenu name="Acessar" to="/login"/>
            </SubmenuContainer>

            <LeftMenuContainer activeTwo={activeTwo}>
                <Submenu name="1 ano A" to="list-message"/>
                <Submenu name="1 ano A" to="list-message"/>
                <Submenu name="1 ano A" to="list-message"/>
                <Submenu name="1 ano A" to="list-message"/>
                <Submenu name="1 ano A" to="list-message"/>
            </LeftMenuContainer>
        </DropdownContainer>
    )
}

export default DropdownMenu;