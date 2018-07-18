import React, { Component } from 'react';

import TabSection from '../../TabSection';

class Volunteer extends Component {

    render() {

        const lables = ["Volunteer", "Why Us", "Why You", "Sign Up"];
        const pages = [
            <div>Volunteer</div>,
            <div>Why Us</div>,
            <div>Why You</div>,
            <div>After Birth</div>,
            <div>Sign Up</div>,
        ];

        <TabSection>
            <GenericBody
                lables={lables}
                pages={pages}
            />
        </TabSection>
    }

}


export default Volunteer;