import React from 'react'
import PropTypes from 'prop-types';
import { TextFieldGroup } from './';

const Table = ({
    values,
    lables,
}) => {
    return (
        <div className="" >
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        {
                            lables.map((x, i) => {
                                return [
                                    <th scope='col' key={i}>{x}</th>
                                ]
                            })
                        }

                    </tr>
                </thead>
                <tbody>

                    {
                        values.map((x, i) => {
                            return [
                                <tr key={i}>
                                    {x.map((x, i) => {
                                        return [
                                            <td key={i}>
                                                <TextFieldGroup 
                                                    type="text" 
                                                    name="none" 
                                                    value={x}
                                                    onChange={null}
                                                />
                                            </td>
                                        ]
                                    })}
                                </tr>
                            ]
                        })
                    }

                </tbody>
            </table>
            
        </div>
    )
}

Table.propTypes = {
    values: PropTypes.array,
    lables: PropTypes.array,
}

Table.defaultProps = {
    type: "text"
}

export default Table;