import * as React from 'react';

import Footer1_2 from './components/Footer2';

// import AppElm from './components/AppElm';
// import SocailElm from './components/SocialElm';
// import SubFooter from './components/SubFooter';

// import './footer.css';
import './foot.css';

class Footer extends React.Component {
    
    public render() {
        return (
            <div>
                <div>
                    <Footer1_2/>
                </div>

                {/* <div className="footer">
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

                </div> */}
            </div>
        )
    }

}

export default Footer;