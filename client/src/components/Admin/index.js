
import axios from 'axios';
import React, { Component } from 'react';
import { GenericBody } from '../common';
// import { Table } from '../common';
import UserTable from './UserTable';

import RemoteStoreAlternative from './test';


class Admin extends Component {

    constructor() {
        super();

        this.state = {
            benefactors: [],
            volunteers: []
        };

        axios
        .get("api/admin/getBenefactor")
        .then(res => {
            const prev = {...this.state}
            const benefactors = res.data.map( (x) =>  {
                return {
                    status: x.status,
                    fname: x.user.fname,
                    lname: x.user.lname,
                    email: x.user.email,
                    id: x._id
                }
            });
            prev.benefactors = benefactors;
            this.setState(prev);
        })
        .catch(err => console.log(err));

        axios
        .get("api/admin/getVolunteer")
        .then(res => {
            const volunteers = res.data.map( (x) =>  {
                return {
                    status: x.status,
                    fname: x.user.fname,
                    lname: x.user.lname,
                    email: x.user.email,
                    id: x._id
                }
            });
            this.setState({volunteers});
        })
        .catch(err => console.log(err));

        this.expandVolunteerComponent = this.expandVolunteerComponent.bind(this)
        this.expandBenefactorComponent = this.expandBenefactorComponent.bind(this)
    }

    expandBenefactorComponent (row) {
        const approveB = () => {
            axios
            .post("api/admin/approveBenefactor", {ids: row.id})
            .then( res => {
                const prev = {...this.state}
                for (let i=0; i < prev.benefactors.length; ++i) {
                    if (prev.benefactors[i].id == row.id) {
                        prev.benefactors[i].status = "Approved";
                        break;
                    }
                    
                }
                this.setState(prev);
            });
    
        }
        const disableB = () => {
            axios
            .post("api/admin/disableBenefactor", {ids: row.id})
            .then( res => {
                const prev = {...this.state}
                for (let i=0; i < prev.benefactors.length; ++i) {
                    if (prev.benefactors[i].id == row.id) {
                        prev.benefactors[i].status = "Disabled";
                        break;
                    }
                    
                }
                this.setState(prev);
            });
        }
        return(
            <div className="jumbotron"> 
                <button onClick={approveB}>Approve</button>
                <button onClick={disableB}>Disable</button> 
            </div>
        )
    }  
    
    expandVolunteerComponent = (row) => {
        const approveV = () => {
            axios
            .post("api/admin/approveVolunteer", {ids: row.id})
            .then( res => {
                const prev = {...this.state}
                for (let i=0; i < prev.benefactors.length; ++i) {
                    if (prev.volunteers[i].id == row.id) {
                        prev.volunteers[i].status = "Approved";
                        break;
                    }
                    
                }
                this.setState(prev);
            });
    
        }

        const disableV = () => {
            axios
            .post("api/admin/disableVolunteer", {ids: row.id})
            .then( res => {
                const prev = {...this.state}
                for (let i=0; i < prev.volunteers.length; ++i) {
                    if (prev.volunteers[i].id == row.id) {
                        prev.volunteers[i].status = "Disabled";
                        break;
                    }
                    
                }
                this.setState(prev);
            });
        }
        return(
            <div className="jumbotron"> 
                <button onClick={approveV}>Approve</button>
                <button onClick={disableV}>Disable</button>  
                
            </div>
        )
    }

    render() {
        return (
            <div className="container">

                <GenericBody
                    lables={["Benefactors", "Volunteers", "News", "TaskList", "Calender", "Forum"]}
                    pages={[
                        <UserTable expand={this.expandBenefactorComponent} data={this.state.benefactors}/>,
                        <UserTable expand={this.expandVolunteerComponent} data={this.state.volunteers}/>,
                        <RemoteStoreAlternative/>,
                        // <Table 
                        //     lables={["Title", "requried volunteers", "hours", "info", "start date", "end date"]} 
                        //     values={[
                        //         ["lala land", "this is super cool", "url super long", "url also long"],
                        //     ]} 
                        // />,
                        // <Table 
                        //     lables={["Title", "info", "location", "start date", "end date"]} 
                        //     values={[
                        //         ["lala land", "this is super cool", "url super long", "url also long"],
                        //     ]} 
                        // />,
                        <div>TEMP FORUM</div>,
                        <div>TEMP FORUM</div>,
                        <div>TEMP FORUM</div>
                    ]}
                />

                   
            </div>
        );
    }
}

export default Admin;