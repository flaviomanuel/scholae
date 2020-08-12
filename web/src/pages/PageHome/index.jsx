import React from 'react';

import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';

import './styles.css';

function PageHome() {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <PageHeader/>

                <SideMenu/>
            </div>
            <h1>alou</h1>
        </div>
    )
}

export default PageHome;