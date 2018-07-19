const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const User = require('../../models/User');
const Profile = require('../../models/Profile');
const Benefactor = require('../../models/Benefactor');
const Volunteer = require('../../models/Volunteer');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   GET api/profile/
// @desc    Get current user profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false}),
    (req, res) => {
        const errors = {};

        const profile = {};

        console.log(req.user)

        User.findOne({ id: req.user.id })
            .then( user => {

                console.log(user);

                Benefactor
                    .findOne({ user: req.user.id })
                    .then( (benefactor) => {
                        profile.benefactor = {...benefactor}
                        return Volunteer.findOne({ user: req.user.id })
                    }).then( (volunteer) => {
                        profile.volunteer = {...volunteer}

                        console.log("hahsa");
                        res.json(profile)
                    }).catch( (err) => {
                        console.log(err);
                        res.json(profile)
                    });
            })
            .catch(err => res.status(404).json(err));
    }
);


module.exports = router;