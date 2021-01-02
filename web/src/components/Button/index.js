import React from 'react';
import { LinkA } from './styles';

function Button({ children, to, type }) {
    return(
        <>
            <LinkA type={type} to={to}>{children}</LinkA>
        </>
    )
}

export default Button;