const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.fname = !isEmpty(data.fname) ? data.fname : '';
    data.lname = !isEmpty(data.lname) ? data.lname : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    data.addr = !isEmpty(data.addr) ? data.addr : '';
    data.unit = !isEmpty(data.unit) ? data.unit : '';
    data.city = !isEmpty(data.city) ? data.city : '';
    data.prov = !isEmpty(data.prov) ? data.prov : '';
    data.pcode = !isEmpty(data.pcode) ? data.pcode : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';


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
    

    if (Validator.isEmpty(data.addr)) {
        errors.addr = "addr field is required";
    } 
    if (Validator.isEmpty(data.unit)) {
        errors.unit = "unit field is required";
    } 
    if (Validator.isEmpty(data.city)) {
        errors.city = "city field is required";
    } 
    if (Validator.isEmpty(data.prov)) {
        errors.prov = "prov field is required";
    } 
    if (Validator.isEmpty(data.pcode)) {
        errors.pcode = "pcode field is required";
    } 
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "phone field is required";
    } 

    // Return
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
