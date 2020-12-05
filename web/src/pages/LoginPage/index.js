import React from 'react';

import { Container, BoxContainer} from '../../assets/styles/global'
import Header from '../../components/Header';
import Input from '../../components/Input'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import { Form, Title } from './styles'



function LoginPage(){
    return (
        <Container>
            <Header/>

        <BoxContainer>
           <Form isLoginPage >
        
                <Title size={3}>Entrar</Title>
                <Input 
                label="Digite seu email" 
                type="Email" 
                name="email"
                suggestions=""
                />

                <Input 
                label="Digite sua senha" 
                type="password" 
                name="password"
                suggestions=""
                />

                

                <Button to="/register-message">Acessar</Button>
                <Title size={1.8}>OU</Title>
                <Button to="/">Acessar como visitante</Button>               
            </Form>
        </BoxContainer>

        <Footer/>
        </Container>
    )
}

export default LoginPage; 