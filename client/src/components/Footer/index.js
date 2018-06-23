import React, { Component } from 'react';
import './footer.css';

import SocailElm from './SocialElm';
import InfoElm from './InfoElm';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="">
                            <div className="row">


                                <div className="col-md-4 show-right-border">
                                    <div className="row">
                                        <div className="col-4">
                                            
                                        </div>
                                        <div className="col-8"

                                        >
                                            {/* <div className="row">
                                                
                                                <div className="col-12 icon-app-text">
                                                    <p>
                                                        <span>Rudaina</span><span>Foundation</span>      
                                                    </p>
                                                </div>
                                            </div> */}

                                            
                                            
                                            <p className="rf"> 
                                                RF
                                            </p>
                                            
                                            
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-12">
                                                <p class="footer--company-reg">Rigistration Number : <a href="https://apps.cra-arc.gc.ca/ebci/haip/srch/charity-eng.action?&amp;bn=792154882RR0001">792154882RR0001</a></p>
                                            </div>
                                        </div> */}
                                        
                                    </div>
                                </div>
                                
                                <div className="col-md-4 show-right-border">
                                    <span className="icon-app-text text-center">
                                       <p>Donwnload Our App</p> 
                                    </span>
                                    
                                    <div className="row">
                                        
                                        <div className="col-6 border-right download-icon">
                                        <a>
                                        <i class="fa fa-apple" style={{color: "white"}} aria-hidden="true"></i>
                                        </a>
                                            
                                        </div>

                                        <div className="col-6 download-icon">
                                        <a>
                                        <i class="fa fa-android" style={{color: "#a4c639"}} aria-hidden="true"></i>
                                        </a>
                                            
                                        </div>

                                    </div>

                                </div>

                                <SocailElm/>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="footer-copyright_sec">
                            <div className="footer-copyright_navlinks">
                                <ul>
                                    <span className="footer-copyright">
                                        <li><a href="">Copyright © 2018 Rudaina Foundation. All Rights Reserved</a></li>
                                    </span>
                                    <span className="footer-navlinks">
                                        <li><a href="">Privacy</a></li>
                                        <li><a href="">Terms</a></li>
                                        <li><a href="">Accessibility</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </span>
                                
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
