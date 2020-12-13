import React from 'react';

import Header from '../../components/Header';

import { Container,BoxContainer } from '../../assets/styles/global';
import Forms from '../../components/Forms';
import Input from '../../components/Input';
import Banner from '../../components/Banner';

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

                    {/* <Input
                    label="Turmas"
                    name="clasrooms"
                    suggestions={[
                        '1A',
                        '1B',
                        '2A',
                        '2B',
                        '3A',
                        '3B',
                        
                    ]}
                    /> */}
                    
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
                </Forms>
                
            </BoxContainer>
        </Container>
    )
}

export default RegisterPage;