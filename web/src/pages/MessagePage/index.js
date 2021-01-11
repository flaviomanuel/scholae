import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';

import { Container, BoxContainer} from '../../assets/styles/global';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

import {    MessageContainer, 
            MessageBody, 
            MessageHeader, 
            MessageName, 
            MessageText, 
            DeleteContainer,
            DeleteButton,
            DeleteText
         } from './styles';
    
import { FaEnvelope} from 'react-icons/fa'
import api from '../../services/api';

function MessagePage(){

    const history = useHistory();

    const [message, setMessage] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    
    const { id } = useParams(); 

    useEffect(() => {
        api.get(`/message/${id}`).then( response => {
            setMessage(response.data.oneMessage)
            setClassrooms(response.data.classrooms)
        })
    }, [id])

      async function handleDelete(){

        const token = localStorage.getItem('token');

        const tokenInclude = `Bearer ${token}`;
        console.log(id);

        try {

            const options = { 
                headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenInclude,
             }
            }
             const response = await api.delete(`/messages/${id}`, {headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenInclude,
             }})
             console.log('reposta: ',response.data)

        alert('Aviso removido com sucesso!');

       history.push('/list-message/1')
    } catch(error){
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
    const text = "alou\n\nalou"
    return(
        <Container>
            <Header/> 

            <BoxContainer>
                <Banner Icon={FaEnvelope}>{message.title}</Banner>
                
                <MessageContainer>
                    <MessageHeader>
                        <DeleteContainer onClick={handleDelete}>
                              <DeleteButton/> 
                             <DeleteText>Deletar aviso</DeleteText>
                        </DeleteContainer>

                        <MessageName>
                            {message.name} 
                        </MessageName>
                        <MessageText size="1.6rem" color="#5F6368">
                        Para:

                        {classrooms.map((classroom) => {
                            return (
                            <React.Fragment key={classroom.id}>
                            {` ${classroom.nickname}, `}
                            </React.Fragment>
                            )
                        })}
                            </MessageText>
                    
                        <MessageText size="1.6rem" color="#5F6368">
                            Data: {message.created_at}
                        </MessageText>
                    </MessageHeader>

                    <MessageBody>
                        <MessageText size="1.8rem" color="#222222">
                        {message.description}
                         </MessageText>
                    </MessageBody>
                </MessageContainer>
            </BoxContainer>
            <Footer/>
        </Container>
    )
}
export default MessagePage;