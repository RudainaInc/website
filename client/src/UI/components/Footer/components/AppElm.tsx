import * as React from 'react';

const AppElm = () => {

    return(
        <div>
            <span className="footer-icon-app-text text-center">
                <p>Donwnload Our App</p> 
            </span>
            <div className="row">
                <div className="col-6 border-right download-icon">
                    <a>
                        <i className="fab fa-apple" style={{color: "white"}} aria-hidden="true"/>
                    </a>
                </div>
                <div className="col-6 download-icon">
                    <a>
                        <i className="fab fa-android" style={{color: "#a4c639"}} aria-hidden="true"/>
                    </a>
                </div>
            </div>
        </div>
       
    )

}

export default AppElm;