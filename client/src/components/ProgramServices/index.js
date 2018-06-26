import React, { Component } from 'react';

import Basket from './Basket';
import OurApp from './OurApp';
import OurCommunity from './OurCommunity';
import Birth from './Birth';
import SignUpToday from './SignUpToday';

import { Test } from '../common';

class ProgramServices extends Component {
    render() {
        return (
            <div className="program-services">
                <div className="container">
                    <Test
                        lables={["Program", "Our App", "Our Community", "After Birth", "Sign Up"]}
                        pages={[<Basket/>, <OurApp/>, <OurCommunity/>, <Birth/>, <SignUpToday/>]}
                    />
                </div>
            </div>
        );
    }
}

export default ProgramServices;