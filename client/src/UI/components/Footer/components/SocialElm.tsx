import * as React from 'react';

const SocialElm = () => {
    return(
        <div className="">
            <span className="footer-icon-app-text text-center">
                <p>Follow Us On</p> 
            </span>
            <div className="footer-social-icons">
                <ul>

                    <li className="facebook">
                        <i className="fab fa-facebook fa-2x" aria-hidden="true"/>
                    </li>

                    <li className="twitter">
                        <i className="fab fa-twitter fa-2x" aria-hidden="true"/>
                    </li>

                    <li className="instagram">
                        <i className="fab fa-instagram fa-2x" aria-hidden="true"/>
                    </li>

                    <li className="linkedin">
                        <i className="fab fa-linkedin fa-2x" aria-hidden="true"/>
                    </li>
                </ul>

            </div>
        </div>  
    )
}

export default SocialElm;