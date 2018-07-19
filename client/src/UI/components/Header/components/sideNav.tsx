import * as React from 'react';

import SideNav from "./react-sidenav";

import '../header.css';

import SideNavItems from './SideNavItems';

const SideNavigation = (props: any) => {
    return ( 
        <div className="container">
            <SideNav
                showNav={props.showing}
                onHideNav={props.onHideNav}
                navStyle={{
                    background : "#242424",
                    maxWidth : "22rem"

                }}
            >
                <SideNavItems/>
            </SideNav>
        </div>
    );
}

export default SideNavigation;