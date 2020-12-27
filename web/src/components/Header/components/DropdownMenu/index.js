import React, { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi'

import { 
    DropdownContainer, 
    FirstItem, 
    SubmenuContainer, 
    MenuContainer, 
    ArrowLeft, 
    LeftMenuContainer} from './styles';
    
import Submenu from '../Submenu/index'
import api from '../../../../services/api';


function DropdownMenu() {

    const [classrooms, setClassrooms] = useState([])

    useEffect(() => {
        api.get('classrooms').then(response => {
            setClassrooms(response.data)
        })
    },[])

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
                {classrooms.map(classroom => 
                    <Submenu 
                    key={classroom.id} 
                    name={classroom.name} 
                    to={`list-message/${classroom.id}` === `/list-message/${classroom.id}` ? `/${classroom.id}` : `/list-message/${classroom.id}`}
                    onClick={handleActiveTwo, handleActive}    
                />
                   )}

            </LeftMenuContainer>
        </DropdownContainer>
    )
}

export default DropdownMenu;