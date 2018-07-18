import React from 'react'
import { Link } from 'react-router-dom';

const icon_check = (icons, i) => {
    if (icons) {
        return <i className={icons[i]} style={{margin: "0 5px"}}></i>
    }
}

const GenericBody = ({
    icons,
    lables,
    pages,
    logout
}) => {

    return (

        <div className="generic-body-template jumbotron bd-example bd-example-tabs">
            <div className="row">
                <div className="col-3">
                    <div 
                        className="nav flex-column nav-pills generic-body-template-nav" 
                        id="v-pills-tab" 
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        
                        {
                            lables.map( (x, i) => {
                                const a = i===0 ?  "nav-link generic-body-template-nav-link active" : "nav-link generic-body-template-nav-link";

                                return[
                                    <a 
                                        className={a}
                                        role="tab"
                                        data-toggle="pill"
                                        aria-selected="true"

                                        id={"v-pills-"+i+"-tab"}
                                        href={"#v-pills-"+i} 
                                        aria-controls={"v-pills-"+i} 
                                        
                                        key={i}
                                    >
                                        {icon_check(icons, i)}
                                        {x}
                                    </a>
                                ]
                            })
                        }

                        { logout ? <Link className="nav-link generic-body-template-nav-link" to="/" onClick={logout} >Logout</Link> : null }



                    </div>
                </div>

                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">

                        {
                            pages.map( (x, i) => {
                                const a = i===0 ? "generic-body-template-text tab-pane fade show active" : "generic-body-template-text tab-pane fade";
                                return[<div 
                                    className={a} 
                                    role="tabpanel" 
                                    id={"v-pills-"+i}
                                    aria-labelledby={"v-pills-"+i+"-tab"}
                                    key={i}
                                >
                                    {x}
                                </div>]

                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default GenericBody;