import React, { Component } from 'react';
import './about.css'

import OurMission from './OurMission';
import LongTermGoal from "./LongTermGoal";
import OurStory from './OurStory';

import { Test } from '../common';

class About extends Component {
    render() {
        return (
            <div className="container">

                <Test
                    lables={["Our Mission", "Long Term", "Our Stroy"]}
                    pages={[<OurMission/>, <LongTermGoal/>, <OurStory/>]}
                />

            </div>
        );
    }
}

export default About;