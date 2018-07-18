import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextAreaGroup = ({
    name,
    placeholder,
    value,
    info,
    error,
    onChange,
    disabled, 
    lable,
}) => {
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

TextAreaGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextAreaGroup.defaultProps = {
    type: "text"
}

export default TextAreaGroup;