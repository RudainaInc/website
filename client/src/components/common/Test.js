import React from 'react'

const Test = ({
    lables,
    pages
}) => {

    return ( 
        <div className="jumbotron bd-example bd-example-tabs">
            <div className="row">

                <div className="col-3">
                    <div className="nav flex-column nav-pills test34" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        
                        {
                            lables.map( (x, i) => {
                                const a = i===0 ?  "nav-link test1234 active" : "nav-link test1234";
                                return[<a 
                                    className={a}
                                    role="tab"
                                    data-toggle="pill"
                                    aria-selected="true"

                                    id={"v-pills-"+i+"-tab"}
                                    href={"#v-pills-"+i} 
                                    aria-controls={"v-pills-"+i} 
                                    
                                    key={i}
                                >
                                    
                                    {x}

                                </a>]
                            })
                        }

                    </div>
                </div>

                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">

                        {
                            pages.map( (x, i) => {
                                const a = i===0 ? "test tab-pane fade show active" : "test tab-pane fade";
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

export default Test;