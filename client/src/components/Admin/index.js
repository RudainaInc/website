

import React, { Component } from 'react';
import { GenericBody } from '../common';
import { Table } from '../common';

import RemoteStoreAlternative from './test';

class Admin extends Component {
    render() {
        return (
            <div className="container">

                <GenericBody
                    lables={["Benefactors", "Volunteers", "News", "TaskList", "Calender", "Forum"]}
                    pages={[
                        <Table 
                            lables={["First Name", "Last Name", "Email", "Status"]} 
                            values={[
                                ["lala land", "this is super cool", "url super long", "url also long"],
                            ]} 
                        />,
                        <Table 
                            lables={["First Name", "Last Name", "Email", "Status"]} 
                            values={[
                                ["lala land", "this is super cool", "url super long", "url also long"],
                            ]} 
                        />,
                        <RemoteStoreAlternative/>
                        ,
                        <Table 
                            lables={["Title", "requried volunteers", "hours", "info", "start date", "end date"]} 
                            values={[
                                ["lala land", "this is super cool", "url super long", "url also long"],
                            ]} 
                        />,
                        <Table 
                            lables={["Title", "info", "location", "start date", "end date"]} 
                            values={[
                                ["lala land", "this is super cool", "url super long", "url also long"],
                            ]} 
                        />,
                        <div>TEMP FORUM</div>
                    ]}
                />

                   
            </div>
        );
    }
}

export default Admin;