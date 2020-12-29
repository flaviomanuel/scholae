import React, {useState, useEffect} from 'react';

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

    const [messages, setMessages] = useState([])
    
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