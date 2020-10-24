import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi'

import { 
    DropdownContainer, 
    FirstItem, 
    SubmenuContainer, 
    MenuContainer, 
    ArrowLeft, 
    LeftMenuContainer} from './styles';
    
import Submenu from './components/Submenu/index'


function DropdownMenu() {
    const [active, setActive] = useState(false);
    const [activeTwo, setActiveTwo] = useState(false);


    function handleActive(){
       
            setActive(oldActive => (oldActive ? false : true ));

            if(activeTwo) {
                setActiveTwo(oldActive => (oldActive ? false : true)); 
            }
            console.log('first', active);

    }

    function handleActiveTwo() {
        setActiveTwo(oldActive => (oldActive ? false : true)); 
        console.log('second', activeTwo);
        
    }

    return (
        <DropdownContainer>
            <MenuContainer onClick={handleActive}>
                <FirstItem >Opções
                <BiChevronDown size="2rem" type="regular" />
                </FirstItem>
            </MenuContainer>

            <SubmenuContainer active={active}>
                <Submenu name="Home" href="/"/>
                <Submenu  name="Salas" icon={<ArrowLeft onClick={handleActiveTwo}/>} />                
                <Submenu name="Acessar" href="/"/>
            </SubmenuContainer>

            <LeftMenuContainer activeTwo={activeTwo}>
                <Submenu name="1 ano A" />
                <Submenu name="1 ano A" />
                <Submenu name="1 ano A" />
                <Submenu name="1 ano A" />
                <Submenu name="1 ano A" />
            </LeftMenuContainer>
        </DropdownContainer>
    )
}

export default DropdownMenu;