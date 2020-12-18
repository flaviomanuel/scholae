import React from 'react';

import {SubmenuLink,
        SubmenuItem
        } from './styles'

function Submenu({ name, to, icon, onClick}) {
    return (
        <SubmenuItem onClick={onClick}>
            <SubmenuLink to={to}>
                <span>
                {icon}
                </span> 
                {name}
            </SubmenuLink> 
        </SubmenuItem>
    )
};

export default Submenu;