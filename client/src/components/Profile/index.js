import React, { Component } from 'react';
import { GenericBody } from '../common';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { getCurrentProfile, clearCurrentProfile } from '../../actions/profileActions';

const Temp = ({a}) => {
    return(
        <div>
            Hello {a}!!!
        </div>
    )
}

class Profile extends Component {

    onLogoutClick(e) {
        e.preventDefualt;
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
          this.props.history.push("/login");
        }
        this.props.getCurrentProfile();
    }

    render() {

        const { user } = this.props.auth;
        const lables = [];
        const pages = [];

        if (user.isAdmin) {

            const admin = [
                [
                    "Admin Profile", 
                    <Temp a={user.fname + " " + user.lname}/>
                ],[
                    "Benefactors",
                    <Temp a=""/>
                ],[
                    "Volunteers",
                    <Temp a=""/>
                ],[
                    "News",
                    <Temp a=""/>
                ],[
                    "TaskList",
                    <Temp a=""/>
                ],[
                    "Calender",
                    <Temp a=""/>
                ],[
                    "Forum",
                    <Temp a=""/>
                ],
            ];

            admin.map( x => {
                lables.push(x[0]);
                pages.push(x[1]);
            });
        }

        if (user.isBenefactor) {
            const benefactor = [
                [
                    "Benefactor Profile",
                    <Temp a={user.fname + " " + user.lname}/>
                ]
            ];

            benefactor.map( x => {
                lables.push(x[0]);
                pages.push(x[1]);
            });
        }

        if (user.isVolunteer) {
            const volunteer = [
                [
                    "Volunteer Profile",
                    <Temp a={user.fname + " " + user.lname}/>
                ]
            ];

            volunteer.map( x => {
                lables.push(x[0]);
                pages.push(x[1]);
            });
        }

        if (user.isRep) {
            const rep = [
                [
                    "Rep Profile",
                    <Temp a={user.fname + " " + user.lname}/>
                ]
            ];

            rep.map( x => {
                lables.push(x[0]);
                pages.push(x[1]);
            });
        }
        

        return (
            <div className="container">

                <GenericBody
                    logout={this.onLogoutClick.bind(this)}
                    lables={lables}
                    pages={pages}
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, getCurrentProfile, clearCurrentProfile })(Profile);