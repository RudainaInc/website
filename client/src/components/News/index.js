import React, { Component } from 'react';

import CardElm from "./CardElm";
import "./news.css"

class News extends Component {
    render() {
        return (
            <div className="container">

                <div>
                    <h1 className="news-section_name"> Relevant News </h1>
                    <hr className="style"/>

                    <div className="row">

                        <CardElm 
                            img="/img/donation_cheque.jpg"
                            title="Maximize Your Giving"
                            content="If your inbox was bursting this week with a deluge of e-mail solicitations from dozens of charities, you’re not alone. Indeed, nearly every major charity seemed to have…"
                            url="http://business.financialpost.com/personal-finance/taxes/how-to-make-the-most-of-your-charitable-giving-come-tax-time"
                        />

                        <div className="news-load_more">
                            <p className="news-load_more_prev"><a href="news-section.html#">Prev</a></p>
                            <p className="news-load_more_next"><a href="news-section.html#">Next</a></p>
                        </div>

                    </div>

                    <h1 className="news-section_name"> Pregnancy News </h1>
                    <hr className="style"/>

                    <div className="row">

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

                    <h1 className="news-section_name"> Charity News </h1>
                    <hr className="style"/>

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

                        <div className="news-load_more">
                            <p className="news-load_more_prev"><a href="news-section.html#">Prev</a></p>
                            <p className="news-load_more_next"><a href="news-section.html#">Next</a></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;