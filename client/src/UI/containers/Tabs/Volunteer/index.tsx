import * as React from 'react';
import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';

import SignUp from './components/SignUp';
import VolunteerToday from './components/VolunteerToday';
import WhyUs from './components/WhyUs';
import WhyYou from './components/WhyYou';


class Volunteer extends React.Component {
    
    public render() {

        const lables = [
            "Volunteer",
            "Why Us",
            "Why You",
            "Sign Up"
        ];

        const pages = [
            <VolunteerToday key="VolunteerToday"/>,
            <WhyUs key="WhyUs"/>,
            <WhyYou key="WhyYou"/>,
            <SignUp key="SignUp"/>
        ];

        return (
            <TabSection>
                <div className="container">

                    <GenericBody
                        labels={lables}
                        pages={pages}
                    />

                </div>
            </TabSection>
        );
    }
}

export default Volunteer;