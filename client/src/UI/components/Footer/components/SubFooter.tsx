import * as React from 'react';
import { Link } from 'react-router-dom';

const SubFooter = () => {

    return(
        <div className="container">
            <div className="sub-footer-copyright_sec">
                <div className="sub-footer-copyright_navlinks">
                    <ul>
                        <span className="sub-footer-copyright">
                            <li>Copyright © 2018 Rudaina Foundation. All Rights Reserved</li>
                        </span>
                        <span className="sub-footer-navlinks">
                            <li><a href="https://drive.google.com/file/d/1MY4GgJsiTXc4VqRfVWNps-8zNjO-ZoiV/view" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                            <li><a href="https://drive.google.com/file/d/1xMrnexs1Yp6NAWiJQPn13cf9l37VUD_P/view" target="_blank" rel="noopener noreferrer">Terms</a></li>
                            <li><a href="https://drive.google.com/file/d/1KcaKEYi1ide5k9uQzXSYmIW7P9a3Chjs/view" target="_blank" rel="noopener noreferrer">Accessibility</a></li>
                            <li><Link to="/contact_us">Contact Us</Link></li>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubFooter;