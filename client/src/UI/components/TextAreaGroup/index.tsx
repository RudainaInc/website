import * as classnames from "classnames";
import * as React from 'react';

const TextAreaGroup = ({
    name,
    placeholder,
    value,
    info,
    error,
    onChange,
    disabled, 
    lable,
}: any) => {
    return (
        <div className="form-group" >
            {lable && <lable>{lable}</lable>}

            <textarea  
                className={classnames("form-control big-font", {
                    'is-invalid': error
                })}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {info && <samll className="form-text text-muted">{info}</samll>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default TextAreaGroup;