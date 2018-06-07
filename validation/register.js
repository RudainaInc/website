const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // Fisrt Name
    if (!Validator.isLength(data.fname, { min: 2, max: 30 })) {
        errors.fname = 'Fisrt Name must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.fname)) {
        errors.fname = 'Fisrt Name field is required';
    }

    // Last Name
    if (!Validator.isLength(data.lname, { min: 2, max: 30 })) {
        errors.lname = 'Last Name must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.lname)) {
        errors.lname = 'Last Name field is required';
    }

    // Email
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // Password
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    // Password2
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    // Return
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
