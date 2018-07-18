import React, { Component } from 'react';

import { TextFieldGroup } from '../common';

import './contactUs.css'


class ContactUs extends Component {

    constructor() {
        super();
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

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div class="container">

                    <div class="row">

                        <div class="col-2"/>

                        <div class="col-8">

                            <h1>Contact Us</h1>                            
                            <form id="contact-form" method="post" action="">

                                <div class="controls">

                                <div class="row">
                                    <div class="col-md-6">
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
                                    <div class="col-md-6">
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

                                <div class="row">
                                    <div class="col-md-6">
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
                                    <div class="col-md-6">
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

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_message">Message *</label>
                                            <textarea  
                                                name="message" 
                                                class="form-control" 
                                                placeholder="Message for me *" 
                                                rows="5" 
                                                required="required"
                                                value={this.state.message}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-success btn-send" value="Send message"/>
                                    </div>
                                </div>
                            </div>  

                            </form> 

                        </div>

                    </div>

                </div>
            </div>
        );
    };
};
                                                
export default ContactUs;