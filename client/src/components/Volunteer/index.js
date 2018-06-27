import React, { Component } from 'react';

import VolunteerToday from './VolunteerToday';
import WhyWeNeed from "./WhyWeNeed";
import WhyYouNeed from './WhyYouNeed';
import SignUp from './SignUp'

import { GenericBody } from '../common';


class Vounteer extends Component {
    render() {
        return (
            <div className="volunteer">
                <div className="container">

                    <GenericBody
                        lables={["Volunteer", "Why Us", "Why You", "Sign Up"]}
                        pages={[<VolunteerToday/>, <WhyWeNeed/>, <WhyYouNeed/>, <SignUp/>]}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Vounteer;