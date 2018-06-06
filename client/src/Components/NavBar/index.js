import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class NavBar extends Component {
  render() {
    return (

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div class="container">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="mobile-nav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to='/'>HOME</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/mission'>MISSION</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/news'>NEWS</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/program_services'>PROGRAM | SERVICES</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/volunteer'>VOLUNTEER</Link>
                        </li>
                    </ul>
                    
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item">
                            <Link class="nav-link" to='/login'>LOGIN</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link" to='/'>FR</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default NavBar;