import * as React from 'react';
import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';

import DonatePage from './components/DonatePage';
import MoneyPage from './components/MoneyPage';

class Donate extends React.Component {

    public render() {

        // const relevant_news = [
        //     {
        //         image:"../img/donation_cheque.jpg",
        //         title:"Maximize Your Giving",
        //         content:"If your inbox was bursting this week with a deluge of e-mail solicitations from dozens of charities, you’re not alone. Indeed, nearly every major charity seemed to have…",
        //         source:"http://business.financialpost.com/personal-finance/taxes/how-to-make-the-most-of-your-charitable-giving-come-tax-time",
        //     }
        // ];


        return(
            <TabSection>
                <div className="container">
                    <GenericBody
                        labels={["Donate", "Your Money | Our Promise"]}
                        pages={[<DonatePage key={"DonatePage"}/>, <MoneyPage key={"MoneyPage"}/>]}
                    />
                </div>
            </TabSection>
        )
    }

}

export default Donate;