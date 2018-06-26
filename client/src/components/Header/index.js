import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.css'

class Header extends Component {
    render() {
        return (

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="imgContainer col-sm-12 col-md-10">
                            <img className="header-logo" src="img/rf-full-logo.png" alt="rudaina foundation full logo"/>
                        </div>
                        <div className="col-md-2">
                            <div className="row loginFranciasbutton">
                                <div className="showRightBorder col-md-6">
                                    <Link to="/login" className="right">Log in</Link>
                                </div>
                                <div className="col-md-6">
                                    <Link to="/" className="left">Françias</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="navLinks">
                        <ul>
                            <li className="showLeftBorder showRightBorder ">
                                <NavLink className="navLink" exact to="/">HOME</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/about">ABOUT</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/news">NEWS</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/program_services">PROGRAMS</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/volunteer">VOLUNTEER</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
