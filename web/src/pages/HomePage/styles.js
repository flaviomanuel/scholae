import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HeaderContainer } from '../../components/Header/styles'

export const HeaderCenterContainer = styled(HeaderContainer)`
    flex-direction: column;
    text-align: center; 
    justify-items: center;
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;   
    margin-top: 15vh;
    border: solid 3px var(--color-gray-header);

    @media(min-width: 900px){
        
        flex-direction: initial;
        justify-items: center;

        width: 70vw;
    }
`;

export const LinkA = styled(Link)`
        background-color: var(--color-yellow-main);
    text-decoration: none;
    color: #ffffff; 
    height: 9rem;
    width: 90vw;
    

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.8;
    margin: 5px;

    @media(min-width: 900px){
        justify-items: center;
        align-items: center;
        height: 11rem;

        &:last-child {
        margin-top: 0.8rem;
    }
    }
`;