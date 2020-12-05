import styled, { css } from 'styled-components';

export const FormsWrapper = styled.form`
 margin: 0 auto;
 padding: 3rem;

 display: flex;
 flex-direction: column;
 width: 100%;
 

 @media(min-width: 750px){
${ props => props.isLoginPage ? css`
    width: 60%;
 ` : css`
    width: 90%;
 ` }

 }
 
 background-color: #F0F0F0;
 border: #CCCCCC 2px solid;

`;
