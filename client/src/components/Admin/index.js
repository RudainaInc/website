import axios from 'axios';

import React, { Component } from 'react';
import { GenericBody } from '../common';
import { Table } from '../common';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class RemoteStoreAlternative extends Component {
    constructor(props) {
        super(props);
        this.products = [];
        this.state = {
            data: []
        };

        axios
        .get('/api/news/all')
        .then( res => {
            console.log(res.data);
            const data = res.data;
            this.products = data;
            this.setState({ data });
        })
        .catch(err => console.log(err));

        
    }

    onCellEdit = (row, fieldName, value) => {
        const { data } = this.state;
        let rowIdx;
        const targetRow = data.find((prod, i) => {
            if (prod.id === row.id) {
                rowIdx = i;
                return true;
            }
            return false;
        });

        if (targetRow) {
            targetRow[fieldName] = value;
            data[rowIdx] = targetRow;
            this.setState({ data });
        }
    }

    onAddRow = (row) => {
        this.products.push(row);

        axios
        .post('/api/news/add', row)
        .then(res => res)
        .catch(err => console.log(err));

        this.setState({
            data: this.products
        });
    }

    onDeleteRow = (row) => {
        this.products = this.products.filter((product) => {
            return product.id !== row[0];
        });
        this.setState({data: this.products});
    }

    render() {
        return (
            <RemoteAlternative
                onCellEdit={ this.onCellEdit }
                onAddRow={ this.onAddRow }
                onDeleteRow={ this.onDeleteRow }
                { ...this.state } 
            />
        );
    }
}

class RemoteAlternative extends Component {
    constructor(props) {
        super(props);
    }

    remote(remoteObj) {
        remoteObj.cellEdit = true;
        remoteObj.insertRow = true;
        remoteObj.dropRow = true;
        return remoteObj;
    }

    render() {
        const cellEditProp = {
            mode: 'click'
        };
        const selectRow = {
            mode: 'checkbox',
            cliclToSelct: true
        };
        return (
            <BootstrapTable data={ this.props.data }
                selectRow={ selectRow }
                remote={ this.remote }
                insertRow deleteRow search pagination
                cellEdit={ cellEditProp }
                options={ {
                    onCellEdit: this.props.onCellEdit,
                    onDeleteRow: this.props.onDeleteRow,
                    onAddRow: this.props.onAddRow
                } }
            >
                <TableHeaderColumn dataField='title' isKey={ true }>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='content'>Content</TableHeaderColumn>
                <TableHeaderColumn dataField='source' dataSort>Source</TableHeaderColumn>
                <TableHeaderColumn dataField='image' dataSort>Image</TableHeaderColumn>
                <TableHeaderColumn dataField='category' dataSort editable={ { type: 'select', options: { values: ["relevant","pregnancy","charity"] } } }>Catagory</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

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