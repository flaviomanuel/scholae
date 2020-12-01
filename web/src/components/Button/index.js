import React from 'react';
import { LinkA } from './styles';

function Button({ children, to }) {
    return(
        <>
            <LinkA to={to}>{children}</LinkA>
        </>
    )
}

export default Button;