import React from 'react';
import { FormsWrapper } from './styles'

function Forms({children, isLoginPage, onSubmit}) {
    return (
        <FormsWrapper onSubmit={onSubmit} isLoginPage={isLoginPage}>
            {children}
        </FormsWrapper>
    )
}

export default Forms;