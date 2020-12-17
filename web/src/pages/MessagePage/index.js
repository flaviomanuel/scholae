import React from 'react';

import { Container, BoxContainer} from '../../assets/styles/global';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

import { MessageContainer, MessageBody, MessageHeader, MessageName, MessageText} from './styles';
import { FaEnvelope } from 'react-icons/fa'

function MessagePage(){
    return(
        <Container>
            <Header/> 

            <BoxContainer>
                <Banner Icon={FaEnvelope}>Aviso de reunião de pais e mestres </Banner>

                <MessageContainer>
                    <MessageHeader>
                        <MessageName>
                            Professor Saitama
                        </MessageName>
                        <MessageText size="1.6rem" color="#5F6368">
                            Para 1º ano A, 2º ano A
                        </MessageText>
                        <MessageText size="1.6rem" color="#5F6368">
                            Data: 07/08/2020
                        </MessageText>
                    </MessageHeader>

                    <MessageBody>
                        <MessageText size="1.8rem" color="#222222">
                        Prezado pais e alunos do Instituto Federal do Tocatins - Campus Araguaína.
                        Após o primeiro bimestre ocorrerá a primeira reunião com os país e mestres que trazerá como tema principal os seguintes temas:<br></br>
                            - Atraso por partes dos alunos;<br></br>
                            - Baixo redimento nas matérias;<br></br>
                            - Data de entrega dos livros escolares;<br></br>
                        Espero que todos compareçam a essa reunião para que fiquem mais a par das situação de seus filhos.<br></br><br></br>

                        Att,<br></br><br></br>

                        Saitama - Diretor do IFTO<br></br>
                         </MessageText>
                    </MessageBody>
                </MessageContainer>
            </BoxContainer>
            <Footer/>
        </Container>
    )
}
export default MessagePage;