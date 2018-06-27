import React, { Component } from 'react';

import OurMission from './OurMission';
import LongTermGoal from "./LongTermGoal";
import OurStory from './OurStory';

import { GenericBody } from '../common';

class About extends Component {
    render() {
        return (
            <div className="container">

                <GenericBody
                    lables={["Our Mission", "Long Term", "Our Stroy"]}
                    pages={[<OurMission/>, <LongTermGoal/>, <OurStory/>]}
                />

            </div>
        );
    }
}

export default About;