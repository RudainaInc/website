import React from 'react'
import CardElm from "./CardElm";

const CharityNews = () => {

    return ( 
        <div>

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
    )
}


export default CharityNews;