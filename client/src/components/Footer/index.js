import React, { Component } from 'react';
import './footer.css';

import SocailElm from './SocialElm';
import InfoElm from './InfoElm';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                
                                <InfoElm/>
                                <SocailElm/>

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
