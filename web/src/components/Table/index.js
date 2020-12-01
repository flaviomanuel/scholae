import React from 'react';

import { TableContainer, 
         Thead, 
         Tbody, 
         TH, 
         Caption,
         CaptionContainer,
         TextCaption,
         IconCaption, 
          } from "./styles";

import TableLine from './components/TableLine';
import { TR } from '../Table/components/TableLine/styles';

function Table() {
    return(
        <TableContainer>
          
            
            <Caption>
                <CaptionContainer>
                    <IconCaption/>
                    <TextCaption>Listagem de avisos</TextCaption>
                </CaptionContainer>
            </Caption>
            

            <Thead>
                <TR>
                <TH>Título</TH>
                <TH>Autor</TH>
                <TH colSpan="2">Data</TH>
                </TR>
            </Thead>
            
            <Tbody>
                <TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

                <TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

                <TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />
                <TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTo" 
                 date="25/10/2020"
                />
                                <TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

                <TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

<TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

<TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

<TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />

<TableLine  
                 href="/" 
                 title="Aviso de reunião de pais e mestres" 
                 name="Reitoria do IFTO" 
                 date="25/10/2020"
                />





            </Tbody>
        </TableContainer>
    )
};

export default Table;