import styled from 'styled-components';



export const Caption = styled.div`
    background-color: var(--color-yellow-main);
    text-align: left;
 
    /* padding: 1rem 0px; */
    margin-bottom: 4rem;
    width: 100%;

`;

export const CaptionContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: end;
    height: 6rem;

`;

export const TextCaption = styled.span`
    color: white;
    font-size: 3rem;
    
    font-weight: 600;

    @media(max-width: 450px) {
    font-size: 2rem;
}


`;

 

    export const IconCaption = styled.div`
      margin: 0 1rem 0 2.5rem;
      @media(max-width: 450px) {
          width: 2.8rem;
          height: 2.8rem;
             display:flex;
    align-items: center;
  }

  `;

  


