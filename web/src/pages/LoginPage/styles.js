import styled from 'styled-components';
 
export const Title = styled.h1`
   color: #444444;
   font-size: ${props => props.size}rem;
   display: flex;
   justify-content: center;
   margin: 1.8rem 0;
`;

export const ButtonSubmit =  styled.button`
    background-color: var(--color-yellow-main);
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1.6rem;
    
    display: flex;
    justify-content: center;

    border-radius: 4px;

    border: 0;

`