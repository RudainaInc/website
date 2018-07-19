import * as React from 'react';
import ReactTable from "react-table";

import { SelectFieldGroup, TextAreaGroup, TextFieldGroup} from '../../../../components';

type Props = any;

const GenModal = (props: Props) => {

    const { id, title, inputs, onClick, onClose } = props

    return (
        <div className="modal fade" id={id} role="dialog" aria-labelledby={id} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="text-center">{title}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form>

                            {
                                inputs.map( (inp: any, i: number) => {
                                    switch (inp.type) {

                                        case "TEXT":
                                            return <TextFieldGroup {...inp.props} key={i}/>
                                        case "AREA":
                                            return <TextAreaGroup {...inp.props} key={i}/>
                                        case "SELECT":
                                            return <SelectFieldGroup {...inp.props} key={i}/>
                                        default:
                                            return <TextFieldGroup {...inp.props} key={i}/>
                                    }
                                })
                                
                            }

                            <hr/>
                            <input type="submit" className="big-font btn btn-info btn-block mt-4" onClick={onClick} data-dismiss="modal" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input className="big-font btn btn-info btn-block mt-4" onClick={onClose} data-dismiss="modal" defaultValue="Close"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


const GenTable = (props: Props) => {

    const { columns, data, inputs, id, title, onClick, onClose } = props;

    return(
        <div>
            <a className="big-font btn btn-info" data-toggle="modal" data-target={"#"+id}>{title}</a>

            <ReactTable 
                className="-striped -highlight"
                columns={columns}
                data={data}
            />

            <GenModal
                id={id}
                title={title}
                inputs={inputs}
                onClick={onClick}
                onClose={onClose}
            />
        </div>
    );
}

export default GenTable;