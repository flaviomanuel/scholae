import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, BoxContainer} from '../../assets/styles/global';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Forms from '../../components/Forms';
import { Title, ButtonSubmit } from './styles';
import api from '../../services/api';



 function LoginPage(){

    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email,
            password
        }
       try {
           const authenticate = await api.post('/users/authenticate', data) ;
           
           console.log('informações: ',authenticate);

            localStorage.setItem('user_id', authenticate.data.user.id);
            localStorage.setItem('token', authenticate.data.token);

           history.push('/register-message');
       } catch (error) {
        // Error 😨
        if (error.response) {

            alert(error.response.data.error)

        } else if (error.request) {
            
            console.log('erro de requisição: ',error.request);
            
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error);
    }


    }

    return (
        <Container>
            <Header/>

        <BoxContainer>
           <Forms onSubmit={handleSubmit} isLoginPage>
        
                <Title size={3}>Entrar</Title>
                <Input 
                label="Digite seu email" 
                type="email" 
                name="email"
                suggestions=""
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <Input 
                label="Digite sua senha" 
                type="password" 
                name="password"
                suggestions=""
                value={password}
                onChange={event => setPassword(event.target.value)}
                />


                
                <ButtonSubmit type="submit">acessar</ButtonSubmit>
                <Title size={1.8}>OU</Title>
                <Button  to="/">Acessar como visitante</Button>               
            </Forms>
        </BoxContainer>

        <Footer/>
        </Container>
    )
}

export default LoginPage; 