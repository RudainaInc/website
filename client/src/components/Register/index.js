import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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
                                    <input 
                                        className={classnames("form-control", {
                                            'is-invalid': errors.fname
                                        })}
                                        type="text" 
                                        name="fname" 
                                        placeholder="First Name"
                                        value={this.state.fname}
                                        onChange={this.onChange}
                                    />
                                    {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                                </div>

                                <div className="form-group col-md-6">
                                    <input 
                                        className={classnames("form-control", {
                                            'is-invalid': errors.lname
                                        })}
                                        type="text"
                                        name="lname" 
                                        placeholder="Last Name"
                                        value={this.state.lname}
                                        onChange={this.onChange}
                                    />
                                    {errors.lname && <div className="invalid-feedback">{errors.lname}</div>}
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    className={classnames("form-control", {
                                        'is-invalid': errors.email
                                    })}
                                    type="text"  
                                    name="email" 
                                    placeholder="Email Address"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>


                            <div className="form-group">
                                <input 
                                    className={classnames("form-control", {
                                        'is-invalid': errors.password
                                    })}
                                    type="password"  
                                    name="password" 
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>

                            <div className="form-group">
                                <input 
                                    className={classnames("form-control", {
                                        'is-invalid': errors.password2
                                    })}
                                    type="password" 
                                    name="password2" 
                                    placeholder="confirm password"
                                    value={this.state.password2}
                                    onChange={this.onChange}
                                />
                                {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
                            </div>

                            <hr/>

                            <input type="submit" className="btn btn-info btn-block mt-4 " />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Register.PropTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);