import React, { Component } from 'react';

import CardElm from "./CardElm";
import "./news.css"

class News extends Component {
    render() {
        return (
            <div className="container">

                <div>
                    <h1>test</h1>

                    <div className="row">

                        <CardElm 
                            img="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png"
                            title="Card title"
                            content="Some quick example text to build on the card title and make up the bulk of the card's content"
                            url="#"
                        />

                        <CardElm 
                            img="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png"
                            title="Card title"
                            content="Some quick example text to build on the card title and make up the bulk of the card's content"
                            url="#"
                        />

                        <CardElm 
                            img="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png"
                            title="Card title"
                            content="Some quick example text to build on the card title and make up the bulk of the card's content"
                            url="#"
                        />

                        <div className="news-load_more">
                            <p className="news-load_more_prev"><a href="news-section.html#">Prev</a></p>
                            <p className="news-load_more_next"><a href="news-section.html#">Next</a></p>
                        </div>

                    </div>

                    <h1>test</h1>

                    <div className="row">
                        <div className="card col-4" style={{width:"18rem"}}>
                            <img className="card-img-top" src="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <p className="text-center">    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </p>
                            </div>
                        </div>

                        <div className="card col-4" style={{width:"18rem"}}>
                            <img className="card-img-top" src="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <p className="text-center">    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </p>

                            </div>
                        </div>

                        <div className="card col-4" style={{width:"18rem"}}>
                            <img className="card-img-top" src="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <p className="text-center">    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <h1>test</h1>

                    <div className="row">
                        <div className="card col-4" style={{width:"18rem"}}>
                            <img className="card-img-top" src="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <p className="text-center">    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </p>
                            </div>
                        </div>

                        <div className="card col-4" style={{width:"18rem"}}>
                            <img className="card-img-top" src="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <p className="text-center">    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </p>

                            </div>
                        </div>

                        <div className="card col-4" style={{width:"18rem"}}>
                            <img className="card-img-top" src="http://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <p className="text-center">    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;