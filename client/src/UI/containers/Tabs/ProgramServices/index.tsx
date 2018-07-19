import * as React from 'react';
import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';

import Basket from './components/Basket';
import Birth from './components/Birth';
import OurApp from './components/OurApp';
import OurCommunity from './components/OurCommunity';
import SignUpToday from './components/SignUpToday';

class ProgramServices extends React.Component {
   public render() {
        return (
            <TabSection>
                <div className="container">

                    <GenericBody
                        labels={["Program", "Our App", "Our Community", "After Birth", "Sign Up"]}
                        pages={[
                            <Basket
                                key={0}
                            />,
                            <OurApp
                                key={1}
                            />,
                            <OurCommunity
                                key={2}
                            />,
                            <Birth
                                key={3}
                            />,
                            <SignUpToday
                                key={4}
                            />
                        ]}
                    />

                </div>
            </TabSection>
        );
    }
}

export default ProgramServices;