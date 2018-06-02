
import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (

        <div className="container">

            <div className="navBar">
                <ul>
                    <div className="floatLeft">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">MISSION</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">PROGRAM | SERVICES</a></li>
                        <li><a href="#">VOLUNTEER</a></li>
                    </div>
                    
                    <div className="floatRight">
                        <li className=" login active"><a href="#">LOGIN</a></li>
                        <li><a href="#">FR</a></li>
                    </div>
        
                </ul>
            </div>
            
        </div>
    );
  }
}

export default NavBar;