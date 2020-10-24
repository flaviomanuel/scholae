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

html, body, #root {
    height: 100vh;
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

export const BoxContainer = styled.div`
    width: 90vw;
    max-width: 700px;

`;

export default GlobalStyle;