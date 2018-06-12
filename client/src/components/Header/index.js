import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Header extends Component {
    render() {
        return (
            <div className="header--smoke_color">
                <div className="container">

                    <div>
                        <div className="row">
                            <div className="col-8">
                                <img className="header--logo" src="img/full-logo.png" alt="Rudaina Logo"/>
                            </div>

                            <div className="col-2"></div>
                            
                            <div className="col-2 header--center">
                                <div className="header--login_fr">
                                    <span className="header--login_fr_login">
                                        <Link className="active" to="/login">Login</Link>
                                    </span>
                                    <span className="header--login_fr_fr">
                                        <Link to="/">Fr</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header--topnav">
                        <Link className="header--leftnav_border active" to="/">HOME</Link>
                        <Link to="/about">ABOUT US</Link>
                        <Link to="/news">NEWS</Link>
                        <Link to="/program_services">PROGRAM SERVICES</Link>
                        <Link to="/volunteer">VOLUTEER</Link>
                    </div>

                </div>
                <hr className="style15"/>
            </div>
        );
    }
}

export default Header;
