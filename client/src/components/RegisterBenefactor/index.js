import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import { AccountGroup } from '../common';
import { AddressGroup } from '../common';


class RegisterBenefactor extends Component {
    constructor() {
        super();
        this.state = {

            account: {
                fname: '',
                lname: '',
                email: '',
                password: '',
                password2: '',
            },

            contact: {
                addr: '', 
                apt: '',
                city: '',
                prov: '',
                pcode: '',
                phone: '',
            },

            errors: {}
        };

        
        this.onSubmit = this.onSubmit.bind(this);
        this.onAccountChange = this.onAccountChange.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
    }

    onContactChange(e) {
        let contact = {...this.state.contact}
        contact[e.target.name] = e.target.value
        this.setState({ contact });
    }

    onAccountChange(e) {
        let account = {...this.state.account}
        account[e.target.name] = e.target.value
        this.setState({ account });
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

        const { errors } = this.state

        return (
            <div className="register">

                <div className="container">
                    <div className="jumbotron col-md-10 mx-auto">

                        <h1 className="text-center">Program Services Registration</h1>
                        <hr/>
                        
                        <form onSubmit={this.onSubmit}>

                            <AccountGroup
                                values={this.state.account}
                                onChange={this.onAccountChange}
                                errors={errors}
                            />
                            <hr/>

                            <AddressGroup
                                values={this.state.contact}
                                onChange={this.onContactChange}
                                errors={errors}
                            />

                            <hr/>

                            <div className="form-group">
                                <label>Nutritional Information</label>
                                    
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="comment"
                                    placeholder="Is there anything your alergic to? What kind of food do you typically eay?"
                                />
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

RegisterBenefactor.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(RegisterBenefactor);