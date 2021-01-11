import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa'

export const MessageContainer = styled.div`
    background-color: #f1f1f1;
    padding: 2rem 4rem 2rem 4rem;
    width: 100%;
    border: solid #CCCCCC 2px;

    @media(max-width: 500px){
        padding: 2rem;
    }
`;

export const MessageHeader = styled.div`
    margin-bottom: 4rem;
`;

export const MessageName = styled.h1`
    color: #000000;
    font-size: 1.8rem;
    font-weight: bold;

    @media(max-width: 500px){
        font-size: 1.4rem;
    }

`;

export const MessageText = styled.p`
    color: ${ ({color}) => color};
    font-size: ${ ({size}) => size};
    
    @media(max-width: 500px){
       font-size: calc(${ ({size}) => size} - 0.5rem);
    }

    white-space: pre-line;
`;

export const MessageBody = styled.div`
`;

export const DeleteContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #ff4040;
    padding: 1rem 2.5rem 1rem 2.5rem;
    color: white;
    float: right;
    border-radius: 8px;

    @media(max-width: 650px){
        padding: 0.5rem 1rem 0.5rem 1rem;
    }

`;
export const DeleteButton = styled(FaTrashAlt)`
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem; 
    
    @media(max-width: 650px){
        width: 1.8rem;
        height: 1.8rem;
    }
`;
export const DeleteText = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
    @media(max-width: 650px){
        display: none;
    }
`;
