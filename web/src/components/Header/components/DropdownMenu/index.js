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

    const isLogged = localStorage.getItem('token')

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
                <Submenu  name="Salas" to="#" icon={<ArrowLeft onClick={handleActiveTwo}/>} />                
                <Submenu name="Acessar" to="/login"/>
                {isLogged ?  (
                <Submenu 
                name="Logout" 
                to="/"
                onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user_id')
              }}
                />

                ) : '' }
            </SubmenuContainer>

            <LeftMenuContainer activeTwo={activeTwo}>
                {classrooms.map(classroom => 
                    <Submenu 
                    key={classroom.id} 
                    name={classroom.name} 
                    to= {`list-message/${classroom.id}` === `/list-message/${classroom.id}` 
                    ? `/${classroom.id}` 
                    : `/list-message/${classroom.id}`}
                    onClick={handleActive}    
                />
                   )}

            </LeftMenuContainer>
        </DropdownContainer>
    )
}

export default DropdownMenu;