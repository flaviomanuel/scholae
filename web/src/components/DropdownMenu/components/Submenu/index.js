import React from 'react';

import {SubmenuLink,
        SubmenuItem
        } from './styles'

function Submenu({ name, href, icon, onClick}) {
    return (
        <SubmenuItem onClick={onClick}>
            <SubmenuLink href={href}>
                <span>
                {icon}
                </span> 
                {name}
            </SubmenuLink> 
        </SubmenuItem>
    )
};

export default Submenu;