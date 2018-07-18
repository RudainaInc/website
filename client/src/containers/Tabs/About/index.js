import React, { Component } from 'react';

import TabSection from '../../TabSection';

class About extends Component {

    render() {

        const lables = ["Our Mission", "Long Term", "Our Stroy"];
        const pages = [
            <div>Our Mission</div>,
            <div>Long Term</div>,
            <div>Our Stroy</div>,
        ];

        <TabSection>
            <GenericBody
                lables={lables}
                pages={pages}
            />
        </TabSection>
    }

}


export default About;