import React from 'react'
import './footer.css';

const InfoElm = () => {

    return(
        <div className="col-md-4 navlinks show-right-border">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4 icon-container">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <div className="col-md-8 icon-text">
                            <a href="https://drive.google.com/open?id=1xMrnexs1Yp6NAWiJQPn13cf9l37VUD_P" target="_blank">Terms</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4 icon-container">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <div className="col-md-8 icon-text">
                            <a href="https://drive.google.com/open?id=1MY4GgJsiTXc4VqRfVWNps-8zNjO-ZoiV" target="_blank">Privacy</a>
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
                            <a href="https://drive.google.com/open?id=1KcaKEYi1ide5k9uQzXSYmIW7P9a3Chjs" target="_blank">Accesibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InfoElm;