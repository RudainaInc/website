import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import classnames from 'classnames';
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

        this.props.loginUserData(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/profile");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/profile");
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="jumbotron col-md-6 mx-auto">

                        <h1 className="text-center">LOGIN</h1>

                        <form onSubmit={this.onSubmit}>
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

Login.propTypes = {
    loginUserData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, { loginUserData })(Login);