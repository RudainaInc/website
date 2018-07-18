import axios from 'axios';
import React, { Component } from 'react';
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
                cols = {[
                    {
                        value: "Title",
                        props: {
                            dataField: "title",
                            isKey: true
                        }
                    },{
                        value: "Content",
                        props: {
                            dataField: "content",
                        }
                    },{
                        value: "Source",
                        props: {
                            dataField: "source",
                        }
                    },{
                        value: "Image",
                        props: {
                            dataField: "image",
                        }
                    },{
                        value: "Category",
                        props: {
                            dataField: "category",
                            editable: { type: 'select', options: { values: ["relevant","pregnancy","charity"] } }
                        }
                    }
                ]}
            />
        );
    }
}

const RemoteAlternative = ({
    data,
    onCellEdit,
    onDeleteRow,
    onAddRow,
    cols
}) => {

    const cellEditProp = {
        mode: 'click'
    };
    const selectRow = {
        mode: 'checkbox',
        cliclToSelct: true
    };

    const remote = remoteObj => {
        remoteObj.cellEdit = true;
        remoteObj.insertRow = true;
        remoteObj.dropRow = true;
        return remoteObj;
    }

    return (
        <BootstrapTable data={ data }
            selectRow={ selectRow }
            remote={ remote }
            insertRow deleteRow search pagination
            cellEdit={ cellEditProp }
            options={ {
                onCellEdit: onCellEdit,
                onDeleteRow: onDeleteRow,
                onAddRow: onAddRow
            } }
        >
            {
                cols.map( (x,i) => {
                    return (
                        <TableHeaderColumn 
                            {...x.props}
                            key={i}
                        >
                            {x.value}
                        </TableHeaderColumn>

                    )
                })
            }
        </BootstrapTable>
    );
}

export default RemoteStoreAlternative;