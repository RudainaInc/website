import * as classnames from "classnames";
import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'samll': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'lable': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

interface ITextFieldGroup {
    name: any,
    placeholder?: any,
    value: any,
    info?: any,
    error?: any,
    type: any,
    onChange?: any,
    disabled?: any,
    lable?: any,
}

const TextFieldGroup = (data: ITextFieldGroup) => {
    const {name, placeholder, value, info, error, type, onChange, disabled, lable} = data;
    return (
        <div className="form-group">
            {lable && <lable>{lable}</lable>}
            <input 
                className={classnames("form-control big-font", {
                    'is-invalid': error
                })}
                type={type} 
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

export default TextFieldGroup;