import React, { Component } from 'react';

import "./news.css"

import RelevantNews from './RelevantNews';
import PregnancyNews from "./PregnancyNews";
import CharityNews from './CharityNews';

import { GenericBody } from '../common';


class News extends Component {
    render() {
        return (
            <div className="container">

                <GenericBody
                    lables={["Relevant News", "Pregnancy News", "Charity News"]}
                    pages={[<RelevantNews/>, <PregnancyNews/>, <CharityNews/>]}
                />

            </div>
        );
    }
}

export default News;