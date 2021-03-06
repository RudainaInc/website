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
const Volunteer = require('../../models/Volunteer');

const Benefactor = require('../../models/Benefactor');
const Address = require('../../models/Address');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post('/registerBenefactor', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        isBenefactor: true
    });
    
    User
        .findOne({ email })
        .then(user => {
            if (user) {
                if (!user.isBenefactor) {
                    const newBenefactor = new Benefactor({
                        user: user,
                        info: "tepm"
                    });
                    newBenefactor.save();
                    return res.json(user);
                } else {
                    errors.email = 'You are already a Benefactor'
                    return res.status(400).json(errors);
                }
            }
            return bcrypt.genSalt(10);

        }).then( salt => {

            return bcrypt.hash(newUser.password, salt);

        }).then( hash => {

            newUser.password = hash;
            return newUser.save();

        }).then( user => {

            const addr = req.body.addr;
            const unit = req.body.unit;
            const city = req.body.city;
            const prov = req.body.prov;
            const pcode = req.body.pcode;
            const phone = req.body.phone;

            const { 
                dietaryInfo,
                studentStatus,
                studentBirth,
                singleStatus,
                residencyStatus,
                exerciseCount,
                dietaryRequirement,
                smokeStatus 
            } = req.body;

            const newBenefactor = new Benefactor({
                user: user,
                
                dietaryInfo,
                studentStatus,
                studentBirth,
                singleStatus,
                residencyStatus,
                exerciseCount,
                dietaryRequirement,
                smokeStatus
            });

            const newAddress = new Address({
                user: user,
                addr: addr,
                unit: unit,
                city: city,
                prov: prov,
                code: pcode,
                phone: phone,

            });

            newBenefactor.save()
            .then(() => newAddress.save())
            .then(() => res.json(user));

        })
        .catch(err => console.log(err));
});

router.post('/registerVolunteer', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    const addr = req.body.addr;
    const unit = req.body.unit;
    const city = req.body.city;
    const prov = req.body.prov;
    const pcode = req.body.pcode;
    const phone = req.body.phone;

    
    const newUser = new User({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        isVolunteer: true
    });
    
    User
        .findOne({ email })
        .then(user => {
            if (user) {
                if (!user.isVolunteer) {
                    const newVolunteer = new Volunteer({
                        user: user,
                        info: "tepm"
                    });
                    newVolunteer.save();
                    return res.json(user);
                } else {
                    errors.email = 'You are already a Volunteer'
                    return res.status(400).json(errors);
                }
            }
            return bcrypt.genSalt(10);

        }).then( salt => {

            return bcrypt.hash(newUser.password, salt);

        }).then( hash => {

            newUser.password = hash;
            return newUser.save();

        }).then( user => {

            const newVolunteer = new Volunteer({
                user: user,
                info: "tepm"
            });

            const newAddress = new Address({
                user: user,
                addr: addr,
                unit: unit,
                city: city,
                prov: prov,
                code: pcode,
                phone: phone
            });

            newVolunteer.save();
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
                            fname: user.fname,
                            lname: user.lname,
                            isAdmin: user.isAdmin,
                            isBenefactor: user.isBenefactor,
                            isVolunteer: user.isVolunteer,
                            isRep: user.isRep,
                            myStatus: false,
                        }

                        if (user.isBenefactor) {
                            Benefactor
                            .findOne({ user })
                            .then( user => {
                                payload.myStatus = user.status === "Approved" ? true : false;
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
                            })
                            
                        } else if (user.isVolunteer) {
                            Volunteer
                            .findOne({ user })
                            .then( user => {
                                payload.myStatus = user.status === "Approved" ? true : false;
                            })
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
                            return;
                        } else {
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
                        }

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
        fname: req.user.fname,
        lname: req.user.lname,
        email: req.user.email,
    });
});


module.exports = router;