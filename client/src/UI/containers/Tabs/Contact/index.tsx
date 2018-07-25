import * as React from 'react';

import { TextAreaGroup, TextFieldGroup } from '../../../components';

import TabSection from '../../TabSection';

class Contact extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            message: '',
            fname:'',
            lname:'',
            phone:'',
            email:'',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    public onChange(e: any) {
        this.setState({[e.target.name]: e.target.value});
    }

    public render() {
        const { errors } = this.state;
        return (
            <TabSection>
            <div>
                <div className="container">

                    <div className="row">

                        <div className="col-2"/>

                        <div className="col-8">

                            <h1>Contact Us</h1>                            
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

                    </div>

                </div>
            </div>
            </TabSection>
        );
    };
};
                                                
export default Contact;