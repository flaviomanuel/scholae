import React from 'react';

import Header from '../../components/Header';

import { Container,BoxContainer } from '../../assets/styles/global';
import Forms from '../../components/Forms';
import Input from '../../components/Input';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { FaFileUpload } from 'react-icons/fa';

function RegisterPage() {
    return(
        <Container>
            <Header/>

            <BoxContainer>
                <Banner Icon={FaFileUpload}>Cadastro de avisos</Banner>
                <Forms isLoginPage={false}>
                    <Input
                    label="Título"
                    name="title"
                    type="text"
                    suggestions=''
                    />
                    
                    <Input
                    label="Turmas"
                    name="classrooms"
                    type="checkbox"
                    suggestions={[
                        '1º ano A',
                        '1º ano B',
                        '2º ano A',
                        '2º ano B',
                        '3º ano A',
                        '3º ano B',
                        
                    ]}
                    
                    />

                    <Input
                    label="Descrição"
                    name="description"
                    type="textarea"
                    suggestions=""
                    />

                    <Button to="/">Submeter</Button>
                </Forms>
                
            </BoxContainer>

            <Footer/>
        </Container>
    )
}

export default RegisterPage;