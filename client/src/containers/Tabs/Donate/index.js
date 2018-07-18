import React, { Component } from 'react';

import TabSection from '../../TabSection';

class Donate extends Component {

    render() {
        const lables = ["Donate", "Your Money | Our Promise"];
        const pages = [
            <div>Donate</div>,
            <div>Your Money | Our Promise</div>,
        ];

        <TabSection>
            <GenericBody
                lables={lables}
                pages={pages}
            />
        </TabSection>
    }
}


export default Donate;