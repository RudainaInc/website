import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import { AccountGroup } from '../common';
import { AddressGroup } from '../common';


class RegisterVolunteer extends Component {
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
        const { errors } = this.state;

        return (
            <div className="register">

                <div className="container">
                    <div className="jumbotron col-md-10 mx-auto">

                        <h1 className="text-center">Volunteer Registration</h1>
                        <hr/>
                        
                        <form onSubmit={this.onSubmit}>

                            <AccountGroup
                                values={this.state.account}
                                onChange={this.onAccountChange}
                                errors={{}}
                            />
                            <hr/>

                            <AddressGroup
                                values={this.state.contact}
                                onChange={this.onContactChange}
                                errors={{}}
                            />

                            <hr/>

                            <div className="form-group">
                                <label>Why Do You Want To Volunteer</label>
                                    
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="comment"
                                    placeholder="Tell us about yourself and your goals as a volunteer."
                                />
                                </div> 

                                <hr/>

                                <div className="form-group">
                                <label>How Can You Help</label>
                                    
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="comment"
                                    placeholder="Tell us what you're interested in working on with Rudaina! (i.e. Social Media, Fundraising, Program Development, etc.)"
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

RegisterVolunteer.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(RegisterVolunteer);