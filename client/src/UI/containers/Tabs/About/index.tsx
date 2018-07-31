import * as React from 'react';
import TabSection from '../../TabSection';

import LongTermGoal from "./components/LongTermGoal";
import LongTermGoalFr from "./components/LongTermGoalFr";
import OurMission from './components/OurMission';
import OurMissionFr from './components/OurMission';
import OurStory from './components/OurStory';
import OurStoryFr from './components/OurStoryFr';

import { GenericBody } from '../../../components';

class About extends React.Component {
   public render() {

        const isFr = true;

        const content = isFr ? (
            <GenericBody
                labels={["Notre Mission", "Long Terme", "Notre Histoire"]}
                pages={[<OurMissionFr key={0}/>, <LongTermGoalFr key={1}/>, <OurStoryFr key={2}/>]}
                icons={["","",""]}
            />
        ) : (
            <GenericBody
                labels={["Our Mission", "Long Term", "Our Story"]}
                pages={[<OurMission key={0}/>, <LongTermGoal key={1}/>, <OurStory key={2}/>]}
                icons={["","",""]}
            />
        );
        
        return (
            <TabSection>
                <div className="container">

                   { content }

                </div>
            </TabSection>
        );
    }
}

export default About;