import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs'


export const TD = styled.td`
    color: #333333;
    text-align: center;
    padding: 6px 0px;
    border-bottom: 2px solid #ddd;
    font-size: 1.4rem;
    text-align: center;
    max-width: 150px;

`;


export const TR = styled.tr`

&:hover {background-color: #f1f1f1;}

`;

export const SearchIcon = styled(BsSearch)`
    color: #333333;
`;