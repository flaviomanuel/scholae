import React from 'react';
import { FormsWrapper } from './styles'

function Forms({children, isLoginPage}) {
    return (
        <FormsWrapper isLoginPage={isLoginPage}>
            {children}
        </FormsWrapper>
    )
}

export default Forms;