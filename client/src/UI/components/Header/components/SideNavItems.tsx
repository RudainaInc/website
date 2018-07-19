import * as React from 'react';
import { Link } from "react-router-dom";

import './sideNav.css';
// import FontAwesome from "react-fontawesome";

const SideNavItems = () => {
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
            link : "/videos"
        },
        {
            icon : "sign-in",
            text : "Log In",
            link : "/login"
        },
        {
            icon : "sign-out",
            text : "Log Out",
            link : "/logout"
        }
    ]

    const showItems = () => {
        return items.map((item , i) =>{
            return (
                <div key={i} className="option">
                    <Link to={item.link}>
                        {/* <FontAwesome name={item.icon}/> */}
                        <span>{item.text}</span>
                    </Link>
                </div>
            )
        })
    }
    
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;