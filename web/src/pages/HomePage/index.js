import React from 'react';

import { HeaderLogo } from '../../components/Header/styles'
import { Container } from '../../assets/styles/global';
import {
        HeaderCenterContainer, 
        Main, 
        ButtonsGroup, 
        LinkA } from './styles';
import {BoxContainer} from '../../assets/styles/global'

import Footer from '../../components/Footer';

import logoImg from '../../assets/images/scholaeYellow.png';


function HomePage(){
    return  (
     <Container>
        <HeaderCenterContainer>
          <HeaderLogo src={logoImg} />
        </HeaderCenterContainer>
        
          <BoxContainer>
            <Main>
            <ButtonsGroup>
            <LinkA to="/list-message/1">Acessar salas</LinkA>
              <LinkA to="/login">Registrar aviso</LinkA>
            </ButtonsGroup>
            </Main>
          </BoxContainer>
        
        <Footer/>
       </Container>
    
    )
}

export default HomePage;