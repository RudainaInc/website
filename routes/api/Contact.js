const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// @route   POST api/contact/contact_us
// @desc    Tests contact route
// @access  Public
router.post('/contact_us', (req, res) => {

    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    
    
});


module.exports = router;