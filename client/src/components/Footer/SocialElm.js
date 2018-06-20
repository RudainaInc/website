import React from 'react'
import './footer.css';

const SocialElm = () => {

    return(
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
    )

}

export default SocialElm;