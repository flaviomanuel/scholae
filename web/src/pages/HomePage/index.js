import React from 'react';

import { HeaderLogo } from '../../components/Header/styles'
import { Container } from '../../assets/styles/global';
import {
        HeaderCenterContainer, 
        Main, 
        ButtonsGroup, 
        LinkA } from './styles';


import Footer from '../../components/Footer';

import logoImg from '../../assets/images/scholaeYellow.png';

import './styles.css';

function HomePage(){
    return  (
     <Container>
        <HeaderCenterContainer>
          <HeaderLogo src={logoImg} />
        </HeaderCenterContainer>
        
        <Main>
          <ButtonsGroup>
           <LinkA to="/list-message">Acessar salas</LinkA>
            <LinkA to="/login">Registar aviso</LinkA>
          </ButtonsGroup>
        </Main>

        <Footer/>
       </Container>
    
    )
}

export default HomePage;