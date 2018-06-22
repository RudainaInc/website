import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './index.css';

class Header extends Component {
    render() {
        return (

            <div>
                <div className="header--smoke_color">
                    <div className="container">
                            <div>
                                <div className="row">
                                    <div className="col-8 header-height">
                                        <img className="header--logo" src="../img/full-logo.png" alt="Rudaina Logo"/>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-2 header--buttons">
                                        <ul className=" header--login_fr header--login_fr-button">

                                            <li>
                                                <span>
                                                    <Link to="/login">Log<span className="invisible">a</span>in</Link>
                                                </span>
                                            </li>

                                            <li>|</li>

                                            <li>
                                                <span>
                                                    <Link to="/">Françias</Link>
                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="header--topnav">
                                <NavLink className="header--leftnav_border " exact to="/">HOME</NavLink>
                                <NavLink to="/about">ABOUT US</NavLink>
                                <NavLink to="/news">NEWS</NavLink>
                                <NavLink to="/program_services">PROGRAM</NavLink>
                                <NavLink to="/volunteer">VOLUTEER</NavLink>
                                
                            </div>
                    </div>
                </div>

                <div className="bar"></div>
            </div>
        );
    }
}

export default Header;
