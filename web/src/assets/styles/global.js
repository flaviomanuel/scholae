import styled, { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 60%;

    --color-gray-header: #F5F5F5;
    --color-gray-table: #F1F1F1;
    --color-yellow-main: #F3C858;
    
}
* {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


#root {
    display: flex;
    align-items: center;
    justify-content: center;
}

body,
input, 
button,
textarea {
    font: 500 1.6rem Roboto;
}



@media(min-width: 700px) {
    :root{
        font-size: 62.5% 
    }
}

ul, li {
    text-decoration: none;
    list-style: none;
}

`;



export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

   width: 100vw;
    height: 100vh;
    
    color: #ffffff; 
`;

export const BoxContainer = styled.div`
    flex: 1;
    width: 80vw;
    
    margin: 6rem auto 6rem auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;



export default GlobalStyle;