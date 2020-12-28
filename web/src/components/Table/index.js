import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import { TableContainer, 
         Thead, 
         Tbody, 
         TH,
         Caption 
          } from "./styles";

import TableLine from './components/TableLine';
import { TR } from '../Table/components/TableLine/styles';
import Banner from '../Banner';

import { FaClipboardList} from 'react-icons/fa';
import api from '../../services/api';


function Table({id}) {

    const location = useLocation();
    console.log('location: ',location);

    const [messages, setMessages] = useState([])
    
    console.log('fon',id)
    console.log('messages',messages)

    useEffect(() => {
        api.get(`messagesclassrooms/${id}`).then(response => {
            setMessages(response.data)
        })
    },[id])

    return(
        <TableContainer>
          
         <Caption>
            <Banner Icon={FaClipboardList}>Listagem de avisos</Banner> 
         </Caption>
            

            <Thead>
                <TR>
                <TH>Título</TH>
                <TH>Autor</TH>
                <TH colSpan="2">Data</TH>
                </TR>
            </Thead>
            
            <Tbody>
                {messages.map((message) => {
                    return (
                        <TableLine 
                        key={message.id} 
                        href={`/message/${message.id}`} 
                        title={message.title} 
                        name={message.name} 
                        date={message.created_at}
                       />
                    )
                })}


            </Tbody>
        </TableContainer>
    )
};

export default Table;