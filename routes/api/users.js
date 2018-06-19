const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');
const Benefactor = require('../../models/Benefactor');
const Address = require('../../models/Address');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    User
        .findOne({ email })
        .then(user => {
            if (user) {
                errors.email = 'Email already exists'
                return res.status(400).json(errors);
            }
            const newUser = new User({
                fname: fname,
                lname: lname,
                email: email,
                password: password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        })
        .catch(err => console.log(err));
});


router.post('/addBenefactor', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    const addr = req.body.addr;
    const apt = req.body.apt;
    const city = req.body.city;
    const prov = req.body.prov;
    const pcode = req.body.pcode;
    const phone = req.body.phone;
    
    User
        .findOne({ email })
        .then(user => {
            if (user) {
                errors.email = 'Email already exists'
                return res.status(400).json(errors);
            }
            return bcrypt.genSalt(10);

        }).then( (err, salt) => {

            return bcrypt.hash(newUser.password, salt);

        }).then( hash => {

            const newUser = new User({
                fname: fname,
                lname: lname,
                email: email,
                password: password,
            });

            newUser.password = hash;
            return newUser.save();

        }).then( user => {

            const newBenefactor = new Benefactor({
                user: user,
                info: "tepm"
            });

            const newAddress = new Address({
                user: user,
                addr: addr,
                unit: apt,
                city: city,
                provance: prov,
                code: pcode,
                phone: phone,

            });

            newBenefactor.save();
            newAddress.save();
            res.json(user);

        })
        .catch(err => console.log(err));
});

// @route   POST api/users/login
// @desc    Login user / Returning JWT TOken
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const email = req.body.email;
    const password = req.body.password;

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }

            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //User Matched
                        const payload = {
                            id: user.id,
                            name: user.name,
                        }
                        // Sign Token
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            { expiresIn: 3600 }, 
                            (err, token) => {
                                res.json({ 
                                    seccess: true,
                                    token: 'Bearer ' + token
                                });
                            }
                        );

                    } else {
                        errors.password = 'Password incorrect'
                        return res.status(400).json(errors);
                    }
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    });
});

module.exports = router;