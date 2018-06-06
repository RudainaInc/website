import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        axios
            .post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }));
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="register">
                <div class="container">
                    <div class="jumbotron col-md-6 mx-auto">
                        <h1 className="text-center">Become a XXXXXXXX</h1>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="fname" placeholder="First Name"/>
                                </div>

                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" class="form-control" id="unit" placeholder="Email Address"/>
                            </div>


                            <div class="form-group">
                                <input type="password" class="form-control" id="fname" placeholder="password"/>
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" id="lname" placeholder="confirm password"/>
                            </div>

                            <hr/>

                            <input type="submit" class="btn btn-info btn-block mt-4 " />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;