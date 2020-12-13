import React from 'react';
import { Caption, CaptionContainer, IconCaption, TextCaption } from './styles';



function Banner({ children, Icon }) {
    return (
        <Caption>
        <CaptionContainer>
            <IconCaption>
                <Icon size={"4rem"} />
            </IconCaption>
            <TextCaption>{children}</TextCaption>
        </CaptionContainer>
    </Caption>
    
    )
}

export default Banner;