import React, { Component } from 'react';
import { GenericBody } from '../common';
import { Table } from '../common';



class Admin extends Component {
    render() {
        return (
            <div className="container">

                <GenericBody
                    lables={["Event", "Benefactors", "Volunteer", "Settings"]}
                    pages={[
                        <Table 
                            lables={["First Name", "Last Name", "Email", "Status"]} 
                            values={[
                                ["lala land", "this is super cool", "url super long", "url also long"],
                            ]} 
                        />,
                        <Table lables={["a"]} values={[["a1"], ["a2"]]} />,
                        <Table lables={["a"]} values={[["a1"], ["a2"]]} />,
                        <Table lables={["a"]} values={[["a1"], ["a2"]]} />,
                    ]}
                />

                   
            </div>
        );
    }
}

export default Admin;