import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const lab = (lable) => {
    if (lable) {
        return <lable>{lable}</lable>
    }
}

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    info,
    error,
    type,
    onChange,
    disabled, 
    lable,
}) => {
    return (
        <div className="form-group" >
            {lab(lable)}
            <input 
                className={classnames("form-control", {
                    'is-invalid': error
                })}
                style={{fontSize:"2.2rem"}}
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

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
    type: "text"
}

export default TextFieldGroup