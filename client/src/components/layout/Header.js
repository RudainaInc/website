import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="container">

          <div class="name-slogan">
            <h1>Rudaina Foundation</h1>
            <h3>Giving Birth To A Better Tommorrow</h3>
          </div>

          <div class="navBar">
            <ul>
              <div class="floatLeft">
                <li><a href="#">HOME</a></li>
                <li><a href="#">MISSION</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">PROGRAM | SERVICES</a></li>
                <li><a href="#">VOLUNTEER</a></li>
              </div>
              
              <div class="floatRight">
                <li class=" login active"><a href="#">LOGIN</a></li>
                <li><a href="#">FR</a></li>
              </div>
          
            </ul>
          </div>
        </div>

        <div class="icon-bar">
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
          <a href="#" class="google"><i class="fa fa-google"></i></a> 
          <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
          <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
        </div>
        
      </div>
    );
  }
}

export default Navbar;
