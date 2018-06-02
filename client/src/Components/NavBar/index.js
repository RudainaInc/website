import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class NavBar extends Component {
  render() {
    return (

        <div className="container">
            <div className="navBar">
                <ul>
                    <div className="floatLeft">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/mission'>MISSION</Link></li>
                        <li><Link to='/news'>NEWS</Link></li>
                        <li><Link to='/program_services'>PROGRAM | SERVICES</Link></li>
                        <li><Link to='/volunteer'>VOLUNTEER</Link></li>
                    </div>
                    
                    <div className="floatRight">
                        <li className=" login active"><Link to='/login'>LOGIN</Link></li>
                        <li><Link to='/'>FR</Link></li>
                    </div>
        
                </ul>
            </div>
        </div>
    );
  }
}

export default NavBar;