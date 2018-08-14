import * as React from 'react';
import TabSection from '../../TabSection';

import { TextAreaGroup, TextFieldGroup } from '../../../components';

import { GenericBody } from '../../../components';

type Props = any;

type State = any;

const exp1 = (
        <form id="contact-form" method="post" action="">

            <div className="controls">

                <div className="row">
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            lable="First Name*"
                            />
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            lable="Last Name*"
                            />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            lable="Email*"
                            />
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="tel"
                            name="phone"
                            placeholder="Please enter your phone"
                            lable="Phone(Optional)"
                            />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">

                            <TextAreaGroup
                                name="message"
                                className="form-control"
                                placeholder="Message for me *"
                                label="Message *"
                                />

                        </div>
                    </div>
                    <div className="col-md-12">
                        <input type="submit" className="big-font btn btn-info btn-block mt-4 "/>
                    </div>
                </div>
            </div>

        </form> 
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