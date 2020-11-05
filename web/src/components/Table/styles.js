import styled from 'styled-components';

import { FaClipboardList} from 'react-icons/fa';


export const TableContainer = styled.table`
    border-collapse: collapse;
    
    width: 100%;
    min-width: 200px;
    margin: 0 auto 0 auto;
    border: 2px solid #ddd;



`;


export const Caption = styled.caption`
    background-color: var(--color-yellow-main);
    text-align: left;
 
    padding: 1rem 0px;
    margin-bottom: 4rem;

`;

export const CaptionContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: end;
`;

export const TextCaption = styled.span`
    color: white;
    font-size: 3rem;
    
    font-weight: 600;

    @media(max-width: 450px) {
    font-size: 2rem;
}


`;

export const IconCaption = styled(FaClipboardList)`
  width: 4rem;
  height: 4rem;

    margin: 0 1rem 0 3rem;
    @media(max-width: 450px) {
        width: 3rem;
        height: 3rem;
}
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





