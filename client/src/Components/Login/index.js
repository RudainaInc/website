import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <div class="container">
                    <div class="jumbotron col-md-6 mx-auto">
                        <h1 className="text-center">LOGIN</h1>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="unit" placeholder="Email Address"/>
                            </div>


                            <div class="form-group">
                                <input type="password" class="form-control" id="fname" placeholder="password"/>
                            </div>

                            <hr/>

                            <input type="submit" class="btn btn-info btn-block mt-4" />

                        </form>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <Link class="form-control btn btn-info btn-block mt-4" to='/register'>Become a volunteer</Link>
                            </div>
                            <div class="form-group col-md-6">
                                <Link class="form-control btn btn-info btn-block mt-4" to='/register'>Become a benefactor</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;