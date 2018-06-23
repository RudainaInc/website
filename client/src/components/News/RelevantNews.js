import React from 'react'
import CardElm from "./CardElm";

const RelevantNews = () => {

    return ( 
        <div>

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
            
            
        </div>
    )
}


export default RelevantNews;