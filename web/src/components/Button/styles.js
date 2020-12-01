import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkA = styled(Link)`
    background-color: var(--color-yellow-main);
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1.6rem;
    
    display: flex;
    justify-content: center;

    border-radius: 4px;
`;