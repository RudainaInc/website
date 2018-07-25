import axios from 'axios';

import * as React from 'react';
import ReactTable from "react-table";

import 'react-table/react-table.css'

import { connect } from 'react-redux';
import { getBenefactorUsers, getVolunteerUsers } from '../../../../StateManager/actions/adminActions';

import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';


import Calender from './components/Calender';
import Donate from './components/Donate';
import NewsTable from './components/NewsTable';
import TaskList from './components/TaskList';


interface IState {
    getBenefactorUsers: () => (dispatch: any) => void,
    getVolunteerUsers: () => (dispatch: any) => void, 
}

type State = any;
type Props = IState & any;

class Admin extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            benefactors: {
                loading: false,
                data: [],
            },
            volunteers: {
                loading: false,
                data: [],
            },
        }

        this.benefactorsSubComp = this.benefactorsSubComp.bind(this);
        this.volunteerSubComp = this.volunteerSubComp.bind(this);
    }

    public componentDidMount() {
        this.props.getBenefactorUsers();
        this.props.getVolunteerUsers();
    }

    public render() {

        const { benefactors, volunteers } = this.props.admin;


        const lables = [
            "Benefactors", 
            "Volunteers", 
            "News", 
            "TaskList", 
            "Calender", 
            "Forum",
            "Donate"
        ];

        const UserColumns = [
            {
                Header: "First Name",
                accessor: "fname"
            },{
                Header: "Last Name",
                accessor: "lname"
            },{
                Header: "Email",
                accessor: "email"
            },{
                Header: "Status",
                accessor: "status"
            }
        ];
        

        const pages: any[] = [
            <ReactTable 
                className="-striped -highlight"
                key={0}
                columns={UserColumns}
                data={benefactors}
                SubComponent= {this.benefactorsSubComp}
            />,
            <ReactTable 
                className="-striped -highlight"
                key={1}
                columns={UserColumns}
                data={volunteers}
                SubComponent= {this.volunteerSubComp}
            />,
            <NewsTable key={2}/>,
            <TaskList key={3}/>,
            <Calender key={4}/>,
            <ReactTable 
                className="-striped -highlight"
                key={5}
                columns={[]}
                data={[]}
            />,
            <Donate key={6}/>
        ];

        return(

            <TabSection>
                <div className="container">

                    <GenericBody
                        labels={lables}
                        pages={pages}
                    />

                </div>
            </TabSection>

        )
    }

    private getStatus = (row: any, type: string): string[] => {
        const { id, status } = row.original;

        let  action: string;
        let url: string;
        if (status  === "Pending") {
            action = "Approve";
            url = "api/admin/approve"+type;
        } else if ( status  === "Disabled") {
            action = "Enable";
            url = "api/admin/approve"+type;
        } else {
            action = "Disable"
            url = "api/admin/disable"+type;
        }

        return [id, action, url]
    }

    private benefactorsSubComp = (row: any) => {

        const [id, action, url]  = this.getStatus(row, "Benefactor");
        
        const approveBenefactor = () => {
            axios
            .post(url, {ids: id})
            .then( (res: any) => {
                this.props.getBenefactorUsers();
            });
        }

        return (
            <div>
                <div style={{ padding: "20px" }}>
                    <div className="card">
                        <button onClick={approveBenefactor}>{action}</button>
                    </div>
                </div>
            </div>
        )
    };

    private volunteerSubComp = (row: any) => {

        const [id, action, url]  = this.getStatus(row, "Volunteer");
        
        const approveVolunteer = () => {
            axios
            .post(url, {ids: id})
            .then( (res: any) => {
                this.props.getVolunteerUsers();
            });
        }

        return (
            <div>
                <div style={{ padding: "20px" }}>
                    <div className="card">
                        <button onClick={approveVolunteer}>{action}</button>
                    </div>
                </div>
            </div>
        )
    };
}


const mapStateToProps = (state: any): any =>  {
    return { 
        admin: state.admin 
    };
}

export default connect( mapStateToProps, { getBenefactorUsers, getVolunteerUsers })(Admin);