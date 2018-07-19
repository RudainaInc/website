import * as classnames from "classnames";
import * as React from 'react';

interface ISelectFieldProps {
    name: string;
    value: string;
    info?: any,
    error?: any,
    options: any[];
    lable?: any,
    onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const SelectFieldGroup: React.StatelessComponent<ISelectFieldProps> = (props: any) => {
    const {name, value, info, error, onChange, options, lable} = props;
    return (
        <div className="form-group">
            {lable && <lable>{lable}</lable>}
            <select 
                className={classnames("form-control big-font", {
                    'is-invalid': error
                })}
                name={name}
                value={value}
                onChange={onChange}
                style={{height:"4.3rem"}}
            >
                {
                    options.map((x: any, i: any) => {
                        const dis = (i===0) ? true : false

                        return [
                            <option key={i} value={x[0]} disabled={dis} >{x[1]}</option>
                        ]
                    })
                }
            </select>
            {info && <samll className="form-text text-muted">{info}</samll>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default SelectFieldGroup;