import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class UserTable extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <UserTableLayout
                { ...this.props }
                expandComponent={this.props.expand}
                cols = {[
                    {
                        value: "First Name",
                        props: {
                            dataField: "fname",
                        }
                    },{
                        value: "Last Name",
                        props: {
                            dataField: "lname",
                        }
                    },{
                        value: "Email",
                        props: {
                            dataField: "email",
                            isKey: true
                        }
                    },{
                        value: "Status",
                        props: {
                            dataField: "status",
                        }
                    },
                ]}
            />
        );
    }
}


const UserTableLayout = ({
    data,
    cols,
    expandComponent
}) => {
    const isExpandable = () => true;

    const expandColumnComponent = ({ isExpanded }) => {
        const content = (isExpanded ? '(-)' : '(+)' );
        return (
          <div> { content } </div>
        );
    }

    const options = {
        expandRowBgColor: 'rgb(242, 255, 163)'
    };

    return (
        <BootstrapTable
            options={ options }
            data={ data }
            expandableRow={ isExpandable }
            expandComponent={ expandComponent }
            expandColumnOptions={{
                expandColumnVisible: true,
                expandColumnComponent: expandColumnComponent,
                columnWidth: 50
            }}
        
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

export default UserTable;