import React from 'react';
import { useParams, Redirect } from 'react-router';

import { Container, BoxContainer } from '../../assets/styles/global';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

function ListPage(){


    const { id } = useParams()

    const isNotFound = parseInt(id) > 6; 

    if(!isNotFound){
    return (
        <Container>       
            <Header/>

            <BoxContainer>
               
                <Table id={id}/>
            </BoxContainer>
           <Footer/>

        </Container>
        
    )
    } else {
        return (
            <Redirect to='/notFound'/>
        )
        } 
    }


export default ListPage; 