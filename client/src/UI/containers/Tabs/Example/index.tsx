import * as React from 'react';
import TabSection from '../../TabSection';

import { TextAreaGroup, TextFieldGroup } from '../../../components';

import { GenericBody } from '../../../components';

type Props = any;

type State = any;

class Contact extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            message: '',
            fname: '',
            lname: '',
            phone: '',
            email: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }
}

const exp1 = (
    <div>
        <form id="contact-form" method="post" action="">

            <div className="controls">

                <div className="row">
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            value={this.state.fname}
                            onChange={this.onChange}
                            error={errors.fname}
                            lable="First Name*"
                            />
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            value={this.state.lname}
                            onChange={this.onChange}
                            error={errors.lname}
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
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                            lable="Email*"
                            />
                    </div>
                    <div className="col-md-6">
                        <TextFieldGroup
                            type="tel"
                            name="phone"
                            placeholder="Please enter your phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            error={errors.phone}
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
                                value={this.state.message}
                                onChange={this.onChange}

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