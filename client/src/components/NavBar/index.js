import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class NavBar extends Component {
  render() {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>HOME</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/mission'>MISSION</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/news'>NEWS</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/program_services'>PROGRAM | SERVICES</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/volunteer'>VOLUNTEER</Link>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>LOGIN</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>FR</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default NavBar;