import React from 'react';

import { TableContainer, 
         Thead, 
         Tbody, 
         TH, 
         IconCaption, 
         Caption
          } from "./styles";

import TableLine from './components/TableLine';
import { TR } from '../Table/components/TableLine/styles';

function Table() {
    return(
        <TableContainer>
          
            
            <Caption>
                <IconCaption/>
                Listagem de avisos
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





            </Tbody>
        </TableContainer>
    )
};

export default Table;