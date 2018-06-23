import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import VolunteerToday from './VolunteerToday';
import WhyWeNeed from "./WhyWeNeed";
import WhyYouNeed from './WhyYouNeed';

import { Test } from '../common';


class Vounteer extends Component {
    render() {
        return (
            <div className="volunteer">
                <div className="container">

                    <Test
                        lables={["Volunteer", "Why Us", "Why You"]}
                        pages={[<VolunteerToday/>, <WhyWeNeed/>, <WhyYouNeed/>]}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Vounteer;