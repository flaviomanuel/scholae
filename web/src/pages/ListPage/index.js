import React from 'react';
import { useParams } from 'react-router';

import { Container, BoxContainer } from '../../assets/styles/global';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

function ListPage(){


    const { id } = useParams()
    return (
        <Container>       
            <Header/>
            
            <BoxContainer>
                <Table id={id}/>
            </BoxContainer>
           <Footer/>

        </Container>
        
    )
}

export default ListPage; 