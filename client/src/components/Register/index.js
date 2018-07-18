import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import { TextFieldGroup } from '../common';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="register">

                <div className="container">
                    <div className="jumbotron col-md-6 mx-auto">

                        <h1 className="text-center">Become a XXXXXXXX</h1>

                        <form onSubmit={this.onSubmit}> 
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <TextFieldGroup
                                        type="text" 
                                        name="fname" 
                                        placeholder="First Name"
                                        value={this.state.fname}
                                        onChange={this.onChange}
                                        error={errors.fname}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextFieldGroup
                                        type="text"
                                        name="lname" 
                                        placeholder="Last Name"
                                        value={this.state.lname}
                                        onChange={this.onChange}
                                        error={errors.lname}
                                    />
                                </div>
                            </div>

                            <TextFieldGroup
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}
                            />

                            <TextFieldGroup
                                type="password"
                                name="password" 
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                error={errors.password}
                            />

                            <TextFieldGroup
                                type="password" 
                                name="password2" 
                                placeholder="confirm password"
                                value={this.state.password2}
                                onChange={this.onChange}
                                error={errors.password2}
                            />

                            <hr/>

                            <input type="submit" className="btn btn-info btn-block mt-4 " />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);