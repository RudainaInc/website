import React from 'react'
import './footer.css';

const SocialElm = () => {

    return(
        <div className="col-md-4">
            <div className="">
                <span className="icon-app-text text-center">
                    <p>Follow Us On</p> 
                </span>
                <div className="wrapper">
                    <ul>
                        <li className="facebook"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                        <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                        <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                        <li className="linkedin"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )

}

export default SocialElm;