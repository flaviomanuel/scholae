import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 8rem;

    background-color: var(--color-gray-header);
`; 


export const HeaderContent = styled.div`
    width: 80vw;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    @media(max-width: 450px){
    width: 90vw;

    }
    `;

export const HeaderLogo = styled.img`
   height: 4rem;
   margin: 2rem;
   padding: 0.3rem;
   max-width: 17rem;
@media(max-width: 350px) {
    height: 3rem;
    margin: 2rem 2rem 2rem 0;

}
`;