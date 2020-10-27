import React from 'react';
import { TR, TD, SearchIcon} from './styles';
import { Link} from 'react-router-dom';


function TableLine({title, name, date, href}) {
    return (
    <TR>
        <TD>{title}</TD>
        <TD>{name}</TD>
        <TD>{date}</TD>
        <TD ><Link to={href}><SearchIcon/></Link></TD>
    </TR>
    )
}

export default TableLine;