import React, { Component } from 'react';

import AppElm from './AppElm';
import SocailElm from './SocialElm';
import SubFooter from './SubFooter';

import './footer.css';

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
                                        <div className="col-4"/>
                                        <div className="col-4">
                                            <img src="../img/Rudiana_Logo_footer-bird.png" alt="logo" style={{height:"200px"}}/>
                                        </div>
                                        <div className="col-4"/>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 show-right-border">
                                    <AppElm/>
                                </div>

                                <div className="col-md-4">
                                    <SocailElm/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <SubFooter/>

                </div>
            </div>
        );
    };
};

export default Footer;
