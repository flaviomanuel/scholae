import styled from 'styled-components';

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

`;

export const MessageBody = styled.div`
`;

