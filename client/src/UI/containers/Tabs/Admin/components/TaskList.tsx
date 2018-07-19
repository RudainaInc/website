import * as React from 'react';

import GenTable from './GenTable';

type State = any;
type Props = any;


class TaskList extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            title: "",
            info: "",
            location: "",
            sdate: "",
            edate: "",
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    public render() {

        const columns = [
            {
                Header: "Title",
                accessor: "title"
            },{
                Header: "Info",
                accessor: "info"
            },{
                Header: "Location",
                accessor: "location"
            },{
                Header: "Start Date",
                accessor: "sdate"
            },{
                Header: "End Date",
                accessor: "edate"
            }
        ]

        const inputs = [
            {
                type: "TEXT",
                props: {
                    type: "text", 
                    name: "title",
                    placeholder: "Title",
                    value: this.state.title,
                    onChange:this.onInputChange
                },
            },{
                type: "AREA",
                props: {
                    type: "text", 
                    name: "info",
                    placeholder: "Info",
                    value: this.state.info,
                    onChange:this.onInputChange
                },
            },{
                type: "TEXT",
                props: {
                    type: "text", 
                    name: "location",
                    placeholder: "Location",
                    value: this.state.location,
                    onChange:this.onInputChange
                },
            },{
                type: "TEXT",
                props: {
                    type: "text", 
                    name: "sdate",
                    placeholder: "Start Date",
                    value: this.state.sdate,
                    onChange:this.onInputChange
                },
            },{
                type: "TEXT",
                props: {
                    type: "text", 
                    name: "edate",
                    placeholder: "End Date",
                    value: this.state.edate,
                    onChange:this.onInputChange
                },
            }
        ];

        return(
            <div>
                <GenTable
                    columns={columns}
                    data={[]}
                    inputs={inputs}
                    id="AddTask"
                    title="Add Task"
                    onClick={this.onAddTask}
                    onClose={this.onClose}
                />
            </div>
        )

    }

    private onClose = () => {
        const prev = {
            title: "",
            info: "",
            location: "",
            sdate: "",
            edate: "",
        }
        this.setState(prev);
    }

    private onAddTask = () => {
        this.onClose();
    }

    private onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const prev = {...this.state};
        prev[name] = value;
        this.setState(prev);

    }

}

export default TaskList;