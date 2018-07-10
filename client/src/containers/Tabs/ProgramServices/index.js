import React, { Component } from 'react';

import TabSection from '../../TabSection';

class ProgramServices extends Component {

    render() {

        const lables = ["Program", "Our App", "Our Community", "After Birth", "Sign Up"];
        const pages = [
            <div>Program</div>,
            <div>Our App</div>,
            <div>Our Community</div>,
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


export default ProgramServices;