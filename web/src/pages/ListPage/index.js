import React from 'react';

import { Container, BoxContainer } from '../../assets/styles/global';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

function ListPage(){
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