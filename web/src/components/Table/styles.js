import styled from 'styled-components';

import { FaClipboardList} from 'react-icons/fa';


export const TableContainer = styled.table`
    border-collapse: collapse;
    
    width: 100%;
    margin: 50px auto 0 auto;
    border: 2px solid #ddd;


`;


export const Caption = styled.caption`
   background-color: var(--color-yellow-main);
   color: white;
    font-size: 3rem;
    
    font-weight: 600;
    padding: 8px 0px;
    margin-bottom: 4rem;

    text-align: left;
`;



export const IconCaption = styled(FaClipboardList)`
  width: 3rem;
  height: 3rem;
  margin: 0 1.5rem 0 3rem;


`;

export const Thead = styled.thead`
    background-color: #f1f1f1;
    text-align: center;
    
`;

export const Tbody = styled.tbody`
    padding: 12px 0px;
    

`;

export const TH = styled.th`
    color: #000000;
    
    padding: 8px 0px;
    font-size: 1.4rem;
    border-bottom: 2px solid #ddd;
`;





