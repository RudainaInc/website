import * as React from 'react';
import { Link } from "react-router-dom";

import './sideNav.css';
// import FontAwesome from "react-fontawesome";

const SideNavItems = (props: any) => {
    const { isAuthenticated } = props;
    const items = [
        {
            icon : "home",
            text : "Home",
            link : "/"
        },
        {
            icon : "file-text-o",
            text : "About",
            link : "/about"
        },
        {
            icon : "newspaper",
            text : "News",
            link : "/news"
        },
        {
            icon : "tasks",
            text : "Programs",
            link : "/program_services"
        },
        {
            icon : "smile",
            text : "Volunteer",
            link : "/volunteer"
        },
        {
            icon : "envelope",
            text : "Contact Us",
            link : "/contact_us"
        },
    ]

    const login = (
        <div className="option" key="la1">
            <a className="" href="#" data-toggle="modal" data-target="#exampleModal">Log in</a>
        </div>
    )

    const profile = (
        <div className="option" key="la2">
            <Link to="/profile">Account</Link>
        </div>
    )

    const showItems = () => {
        const la = items.map((item , i) =>{
            return (
                <div key={i} className="option">
                    <Link to={item.link}>
                        {/* <FontAwesome name={item.icon}/> */}
                        <span>{item.text}</span>
                    </Link>
                </div>
            )
        })
        
        la.push(isAuthenticated ? profile : login );
        return la;
    }

    
    
    
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;