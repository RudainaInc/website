import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 navlinks show-right-border">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-4 icon-container">
                                                    <i className="fas fa-file-alt"></i>
                                                </div>
                                                <div className="col-md-8 icon-text">
                                                    <a href="footer-section.html">Terms</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-4 icon-container">
                                                    <i className="fas fa-user-shield"></i>
                                                </div>
                                                <div className="col-md-8 icon-text">
                                                    <a href="footer-section.html">Privacy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row footer-navlinks">
                                        <div className="col-md-6 ">
                                            <div className="row">
                                                <div className="col-md-4 icon-container">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="col-md-8 icon-text">
                                                    <a href="footer-section.html">Contact Us</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-4 icon-container">
                                                    <i className="fas fa-door-open"></i>
                                                </div>
                                                <div className="col-md-8 icon-text">
                                                    <a href="footer-section.html">Accesibility</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="col-md-4 show-right-border">
                                    <p className="follow-us">FOLLOW US :</p>
                                    <div>
                                        <div className="wrapper">
                                            <ul>
                                                <li className="facebook"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                                                <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                                                <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                                                <li className="linkedin"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="container-fluid ">
                                        <div className="row app-download-links">
                                            <div className="col-md-6">
                                                <a href="footer-section.html"><img src="../img/ios_app_store.PNG" alt="download app on ios app store"/></a>
                                            </div>
                                            <div className="col-md-6">
                                                <a href="footer-section.html"><img src="../img/google_play_store.PNG" alt="download app on ios app store"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 footer_rudaina_logo_reg ">
                                    <div className="container-fluid ">
                                        <div className="">
                                            <div className="col-md-4 footer-rudaina-logo">
                                                <img className="footer--logo_bird remove-right-border" src="../img/footer-logo-bird.jpg" alt=""/>
                                            </div>
                                            <div className="col-md-8">
                                                    <p className="footer-rudaina-name_rudaina">Rudaina</p>
                                                    <p className="footer-rudaina-name_foundation">Foundation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="footer--company-reg">Rigistration Number : <a href="https://apps.cra-arc.gc.ca/ebci/haip/srch/charity-eng.action?&bn=792154882RR0001">792154882RR0001</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-section">
                        <div className="container">
                            <p>Copyright © 2018 Rudaina Foundation. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
