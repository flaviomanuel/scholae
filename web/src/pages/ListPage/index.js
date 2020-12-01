import React, { useState, useEffect} from 'react';

import { Container, BoxContainer } from '../../assets/styles/global';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

function ListPage(){

  
    
  
        function getHeight(ElementId){
            const element = document.getElementById(ElementId);
            return console.log(element);
        }


    const example = Container.componentStyle.componentId;
    var buttonIsVisible = window.visualViewport.width < window.Width;
    console.log('valor', example);
    console.log('valor2', getHeight(example));

 
    return (
        <Container>       
            <Header/>
            
            <BoxContainer>
                <Table/>
            </BoxContainer>
           <Footer/>

        </Container>
        
    )
}

export default ListPage; 