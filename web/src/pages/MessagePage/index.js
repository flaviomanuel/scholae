import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, BoxContainer} from '../../assets/styles/global';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

import { MessageContainer, MessageBody, MessageHeader, MessageName, MessageText} from './styles';
import { FaEnvelope } from 'react-icons/fa'
import api from '../../services/api';

function MessagePage(){

    const [message, setMessage] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    
    const { id } = useParams(); 

    useEffect(() => {
        api.get(`/message/${id}`).then( response => {
            setMessage(response.data.oneMessage)
            setClassrooms(response.data.classrooms)
        })
    }, [id])

    

    return(
        <Container>
            <Header/> 

            <BoxContainer>
                <Banner Icon={FaEnvelope}>Aviso de reunião de pais e mestres </Banner>
        
                <MessageContainer>
                    <MessageHeader>
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