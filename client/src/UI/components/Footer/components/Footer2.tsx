import * as React from 'react'
import { Link } from 'react-router-dom';

const footer12 = () => {

    return(
        <div className="footer_">
            <div  className="container footer_" style={{color: "white"}}>
                <div className="row row1">
                    <div className="col-sm-6 social" >
                        <div className="footer_social-icons">
                            <p>Follow Us On :</p>
                            <a href="#" className="fab fa-facebook"/>
                            <a href="#" className="fab fa-twitter"/>
                            <a href="#" className="fab fa-linkedin"/>
                            <a href="#" className="fab fa-instagram"/>
                        </div>
                    </div>
                    <div  className="col-sm-6 center app-download">
                        <p>Download Our App</p>
                        <div className="row">
                            <div className="col-6">
                                <li><img className="right" src="../img/i-android.png" alt="logo" /></li>
                            </div>
                            <div className="col-6">
                                <li><img className="left" src="../img/i-ios.png" alt="logo" /></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="row row2">
                    <div className="col-sm-6 ">
                        <span className="footer1_2-links center">
                            <ul>
                                <li ><a href="https://drive.google.com/file/d/1MY4GgJsiTXc4VqRfVWNps-8zNjO-ZoiV/view" target="_blank" rel="noopener noreferrer"  style={{color: "white"}}>Privacy</a></li>
                                <li ><a href="https://drive.google.com/file/d/1xMrnexs1Yp6NAWiJQPn13cf9l37VUD_P/view" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Terms</a></li>
                                <li><a href="https://drive.google.com/file/d/1KcaKEYi1ide5k9uQzXSYmIW7P9a3Chjs/view" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Accessibility</a></li>
                                <span className="contact-us"><li><Link to="/contact_us" style={{color: "white"}}>Contact Us</Link></li></span>
                            </ul>    
                        </span>
                    </div>
                    <div  style={{color: "grey"}} className="col-sm-6 footer-copyright center">
                        <p>© {(new Date()).getFullYear()} Rudaina Foundation. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer12;