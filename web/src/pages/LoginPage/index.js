import React from 'react';

import { Container, BoxContainer} from '../../assets/styles/global'
import Header from '../../components/Header';
import Forms from '../../components/Forms'
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
                <Forms.Text 
                label="Digite seu email" 
                type="Email" 
                name="email"
                suggestions=""
                />

                <Forms.Text 
                label="Digite sua senha" 
                type="password" 
                name="password"
                suggestions=""
                />

                

                <Button to="/">Acessar</Button>
                <Title size={1.8}>OU</Title>
                <Button to="/">Acessar como visitante</Button>               
            </Form>
        </BoxContainer>

        <Footer/>
        </Container>
    )
}

export default LoginPage; 