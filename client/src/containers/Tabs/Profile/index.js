import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabSection from '../../TabSection';
import { GenericBody } from '../../../components/common';
import { logoutUser } from '../../../actions/authActions';
import { getCurrentProfile, clearCurrentProfile } from '../../../actions/profileActions';

const Temp = ({a}) => {
    return(
        <div>
            {a}
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
        console.log(user);
        console.log("hello")
        const lables = [];
        const pages = [];

        if (user.isAdmin) {
            adminPages.map( x => {
                lables.push(x[0]);
                pages.push(x[1]);
            });
        } else {

            const status = (
                <div>
                    <div>
                        <p className="alignCenter"> STATUS : PENDING</p>
                    </div>

                    <div className="row">
                        
                        <div className="col-5"/>

                        <div className="col-2">
                            <p className=" loader"></p>
                        </div>

                        <div className="col-5"/>

                    </div>
                </div>
            );

            lables.push("Profile");
            pages.push(
                <div>
                    <div className="section-header">
                        <span className="text" >My Profile</span>
                    </div>

                    <div className="myImage alignCenter">
                        <img src="../img/user.png" alt="Avatar"/>
                    </div>

                    <div>
                        <h2 className="alignCenter">{user.fname + " " + user.lname}</h2>
                    </div>

                    { user.myStatus == false ? status : null }
                    

                    <form className="aboutMe">
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                            have evolved 
                        </p>
                    </form>

                </div>
                
            );

            if (user.isBenefactor) {
                lables.push("Status");
                pages.push(
                    <div>
                        TEMP
                    </div>
                );
            }
    
            if (user.isVolunteer) {
                lables.push("Task List");
                pages.push(
                    <div className="">
                        <div className="section-header">
                            <span className="text" >Task List</span>
                        </div>
                        <p className="center">This is a list of task we would need your help with . Please check below and select a task you think you could help with , 
                            we really appreciate !
                        </p>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th style={{width:"10%"}} scope="col">#</th>
                                    <th style={{width:"30%"}} scope="col">Task</th>
                                    <th style={{width:"40%"}} scope="col">Date</th>
                                    <th style={{width:"10%"}} scope="col">Volunteers Needed</th>
                                    <th style={{width:"10%"}} scope="col">Commitment(hrs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Bake cake</td>
                                    <td>2018-03-28</td>
                                    <td>15</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Bake cake</td>
                                    <td>2018-03-28</td>
                                    <td>15</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Bake cake</td>
                                    <td>2018-03-28</td>
                                    <td>15</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                );
            }

            lables.push("Calender");
            pages.push(<Temp a="Calender"/>);

            if ( user.isVolunteer && (user.isRep || user.isBenefactor) ) {
                lables.push("Volunteer Message Board");
                pages.push(<Temp a="Message Board"/>);

                lables.push("Benefactor Message Board");
                pages.push(<Temp a="Message Board"/>);

            } else {
                lables.push("Message Board");
                pages.push(<Temp a="Message Board"/>);
            }

        }

        return (
            <TabSection>
                <GenericBody
                    logout={this.onLogoutClick.bind(this)}
                    lables={lables}
                    pages={pages}
                />
            </TabSection>
        )
    }
}

const adminPages = [
    [
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

const mapStateToProps = (state) => {
    return {
        ...state,
    };
}

export default connect(mapStateToProps, { logoutUser, getCurrentProfile, clearCurrentProfile })(Profile);