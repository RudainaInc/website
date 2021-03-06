import * as React from 'react';
import TabSection from '../../TabSection';

import './Example.css';

import { GenericBody } from '../../../components';

type Props = any;

type State = any;

const exp1 = (

       <div className="form-style-10">
            <h1>Contact Us</h1>
        <form>
            <div className="section">Contact Information</div>
            <div className="inner-wrap">
                <label>Your Full Name <input type="text" name="field1" /></label>
                <label>Email Address <input type="email" name="field3" /></label>
                <label>Phone Number <input type="number" name="field3" /></label>
            </div>

            <div className="section">Message</div>
            <div className="inner-wrap">
                <textarea name="field4" placeholder="Type your Message" />
            </div>
            <div className="button-section">
                <input type="submit" name="Sign Up" />
            </div>
        </form>
        </div>
)

const exp2 = (
    <div>
        world
    </div>
)

class Example extends React.Component<Props, State> {


    public render() {

        return (
            <TabSection>

                <div className="container">
                    <GenericBody
                        labels={['exp1', 'exp2']}
                        pages={[exp1, exp2]}
                        />
                </div>
            </TabSection>
        )

    }
}

export default Example;