import styled, { css} from 'styled-components';
import { BiChevronLeft} from 'react-icons/bi';


export const DropdownContainer = styled.ul`
    border-radius: 8px 8px 0px 0px;
    cursor: pointer;
 

    position: relative;
    top: 20px; 
`;

export const MenuContainer = styled.li`
    background-color: var(--color-yellow-main);
    border-radius: 0.8rem;
`;

export const FirstItem = styled.a`
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    padding: 0.8rem 4rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 500px) {
    padding: 1rem 2rem;
 
}

@media(max-width: 350px) {
    padding: 0.5rem 1rem;

}
`;


export const SubmenuContainer = styled.ul`    
   filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.25));
   height: 100px;
   background: #f5f5f5;

   display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: space-evenly;

   ${ props => props.active ? ' '
   : css`
    display: none;
   ` }  
`;

export const ArrowLeft = styled(BiChevronLeft)`
    font-size: 1.7rem;
    position: relative;
    right: 1px;
`;

export const LeftMenuContainer = styled.ul`
    background-color: #f5f5f5;
   filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.25));
   height: 130px;

   display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: space-evenly;

    width: 12rem;
    position: relative;
    right: 120px;
    bottom: 65px;

    ${ props => props.activeTwo ? ' '
   : css`
    display: none;
   ` }  

`;