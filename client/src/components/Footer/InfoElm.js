import React from 'react'
import './footer.css';

const InfoElm = ({}) => {

    return(
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
    )

}

export default InfoElm;