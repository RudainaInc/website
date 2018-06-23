import React from 'react'
import CardElm from "./CardElm";

const PregnancyNews = () => {

    return ( 
        <div>

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
            
        </div>
    )
}


export default PregnancyNews;