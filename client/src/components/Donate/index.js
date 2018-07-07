import React, { Component } from 'react';
import { GenericBody } from '../common';
import NewsModel from '../News/NewsModel';

class Donate extends Component {

    render() {

        const relevant_news = [
            {
                image:"../img/donation_cheque.jpg",
                title:"Maximize Your Giving",
                content:"If your inbox was bursting this week with a deluge of e-mail solicitations from dozens of charities, you’re not alone. Indeed, nearly every major charity seemed to have…",
                source:"http://business.financialpost.com/personal-finance/taxes/how-to-make-the-most-of-your-charitable-giving-come-tax-time",
            }
        ];

        const donate = (
            <div className="row">
                <div className="col-6">
                    <p>
                        All across the world, negligence of prenatal care has led to the deaths of thousands of children, as well as the development of neurological conditions such as Cerebral Palsy and HIE (Hypoxic Ischemic Encephalopathy). In fact, just over 50 000 people have been diagnosed with Cerebral Palsy in Canada alone, and research has shown that up to 1 in 3 premature babies are affected by Cerebral Palsy. Many risk factors of pregnancy related complications and premature birth include smoking, drinking, drug habits, and any other origins of a hostile or unhealthy environment for the growth of a baby throughout its gestation period.
                        Here at the Rudaina Foundation, it is our mission to promote a healthy lifestyle and to support pregnant women who are exposed to the stated risk factors for premature birth in order to ensure the healthy birth of a child.
                        One of our main activities for the promotion of prenatal care is the production and distribution of our Life Baskets. Visit 'your money, our promise' section to learn more.
                        With every small donation, you make a big contribution to the health and happiness of new families across Canada.
                        Thank you!
                    </p>
                </div>
                <div className="col-6">
                    <img src="smiley.gif" alt="Smiley face"/> 
                </div>
            </div>
        )

        const money = (
            <div className="row">
                
                <p>
                    All across the world, negligence of prenatal care has led to the deaths of thousands of children.
                </p>

                <NewsModel data={relevant_news}/>
                
            </div>
        )

        return(
            <div className="container">
                <GenericBody
                    lables={["Donate", "Your Money | Our Promise"]}
                    pages={[donate, money]}
                />
            </div>
        )
    }

}

export default Donate;