import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './index.css';

class Header extends Component {
    render() {
        return (
            <div className="header--smoke_color">

                <nav className="navbar navbar-expand-sm" >

                    <div className="container">
                        <div className="row">

                            <div className="col-8">
                                <img className="img-fluid" src="../img/full-logo.png" alt="Rudaina Logo"/>
                            </div>

                            <div className="col-2"/>

                            <div className="col-2 header--buttons" >
                                <ul className="header--login_fr header--login_fr-button">
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


                            <button class="navbar-toggler" style={{backgroundColor:"#BB0000"}} type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            
                            <div class="col-12 collapse navbar-collapse"  id="mobile-nav">


                                <ul class="navbar-nav mr-auto header--topnav" style={{width:"100%"}}>

                                    <li className="nav-item" style={{width:"100%"}}>
                                        <NavLink exact to="/">HOME</NavLink>
                                    </li>

                                    <li className="nav-item" style={{width:"100%"}}>
                                        <NavLink to="/about">ABOUT</NavLink>
                                    </li>

                                    <li className="nav-item" style={{width:"100%"}}>
                                        <NavLink to="/news">NEWS</NavLink>
                                    </li>

                                    <li className="nav-item" style={{width:"100%"}}>
                                        <NavLink to="/program_services">PROGRAM</NavLink>
                                    </li>

                                    <li className="nav-item" style={{width:"100%"}}>
                                        <NavLink to="/volunteer">VOLUTEER</NavLink>
                                    </li>

                                </ul>
                            </div>
                            

                        </div>
                    </div>
                </nav>

                <div className="bar" style={{width:"100%"}}></div>

            </div>

        );
    }
}

export default Header;
