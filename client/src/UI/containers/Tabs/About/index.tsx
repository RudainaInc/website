import * as React from 'react';
import TabSection from '../../TabSection';

import LongTermGoal from "./components/LongTermGoal";
import OurMission from './components/OurMission';
import OurStory from './components/OurStory';

import { GenericBody } from '../../../components';

class About extends React.Component {
   public render() {
        return (
            <TabSection>
                <div className="container">

                    <GenericBody
                        labels={["Our Mission", "Long Term", "Our Stroy"]}
                        pages={[<OurMission key={0}/>, <LongTermGoal key={1}/>, <OurStory key={2}/>]}
                        icons={["","",""]}
                    />

                </div>
            </TabSection>
        );
    }
}

export default About;