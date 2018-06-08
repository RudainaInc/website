import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loginUserData } from '../../actions/authActions';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="jumbotron col-md-6 mx-auto">

                        <h1 className="text-center">LOGIN</h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="email"
                                    placeholder="Email Address"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    name="password" 
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <hr/>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Link className="form-control btn btn-info btn-block mt-4" to='/register'>Become a volunteer</Link>
                            </div>
                            <div className="form-group col-md-6">
                                <Link className="form-control btn btn-info btn-block mt-4" to='/register'>Become a benefactor</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Login.PropTypes = {
    loginUserData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, { loginUserData })(Login);