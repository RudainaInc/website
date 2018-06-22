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
                            img="../img/donation_cheque.jpg"
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
                            img="../img/pubmed.png"
                            title="6-weeks Post birth support"
                            content="Research suggests women find the first 2 to 6 weeks to be the most difficult time for breastfeeding. It has been identified that women need and seek support with breastfeeding during this time…"
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
                            img="../img/canada_summer_jobs.png"
                            title="Summer Job approval"
                            content="2018/05/01 – Rudaina Foundation has been approved to receive its first grant from the Canada Summer Jobs program offered by the Government of Canada!"
                            url="#"
                        />

                         <CardElm 
                            img="../img/government_of_canada.png"
                            title="We've been Approved"
                            content="2017/09/29 - Rudaina Foundation has officially been approved by the Canada Revenue Agency as a Chartiable Organization!"
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