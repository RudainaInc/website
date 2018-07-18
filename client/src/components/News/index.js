import axios from 'axios';
import React, { Component } from 'react';
import "./news.css"

import NewsModel from './NewsModel';

import { GenericBody } from '../common';


class News extends Component {

    constructor() {
        super();

        this.state = {
            charity_news: []
        }

        console.log("test");


        axios
        .get('/api/news/all')
        .then( res => {
            console.log(res.data);
            const charity_news = res.data;
            
            this.setState({charity_news})
        })
        .catch(err => console.log(err));



    }

    render() {

        // const charity_news = [
        //     {
        //         image:"../img/canada_summer_jobs.png",
        //         title:"Summer Job approval",
        //         content:"2018/05/01 – Rudaina Foundation has been approved to receive its first grant from the Canada Summer Jobs program offered by the Government of Canada!",
        //         source:"#",
        //     },{
        //         image:"../img/government_of_canada.png",
        //         title:"We've been Approved",
        //         content:"2017/09/29 - Rudaina Foundation has officially been approved by the Canada Revenue Agency as a Chartiable Organization!",
        //         source:"#"
        //     }
        // ];
        
        const relevant_news = [
            {
                image:"../img/donation_cheque.jpg",
                title:"Maximize Your Giving",
                content:"If your inbox was bursting this week with a deluge of e-mail solicitations from dozens of charities, you’re not alone. Indeed, nearly every major charity seemed to have…",
                source:"http://business.financialpost.com/personal-finance/taxes/how-to-make-the-most-of-your-charitable-giving-come-tax-time",
            }
        ];

        const pregnancy_news = [
            {
                image:"../img/pubmed.png",
                title:"6-weeks Post birth support",
                content:"Research suggests women find the first 2 to 6 weeks to be the most difficult time for breastfeeding. It has been identified that women need and seek support with breastfeeding during this time…",
                source:"http://business.financialpost.com/personal-finance/taxes/how-to-make-the-most-of-your-charitable-giving-come-tax-time",
            }
        ];

        return (
            <div className="container">

                <GenericBody
                    lables={["Relevant News", "Pregnancy News", "Charity News"]}
                    pages={[<NewsModel data={relevant_news}/>, <NewsModel data={pregnancy_news}/>, <NewsModel data={this.state.charity_news}/>]}
                />

            </div>
        );
    }
}

export default News;