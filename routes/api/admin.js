const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const User = require('../../models/User');

const Benefactor = require('../../models/Benefactor');
const Volunteer = require('../../models/Volunteer');

const User = require('../../models/User');

router.get('/getBenefactor', (req, res) =>{
    const benefactor = [];

    Benefactor.find()
    .populate("user")
    .then( users => {
        for (i=0; i < users.length; ++i) {
            benefactor.push(users[i]);
        }
        res.json(benefactor);
    });
})


router.post('/approveBenefactor', (req, res)=>{
    const benefactorId = req.body.ids;
    //console.log(typeof benefactorId);

    //console.log(bId);
    Benefactor.findOne({"_id":benefactorId})
    .then(user=>{
        console.log(user);
        user.status=true;
        user.save();
    }).catch(
        err => null
    )


    res.json({msg:"test"})

})

router.get('/getVolunteer', (req, res) =>{
    const volunteer = [];

    Volunteer.find()
    .populate("user")
    .then( users => {
        for (i=0; i < users.length; ++i) {
            volunteer.push(users[i]);
        }
        res.json(volunteer);
    });
})

router.post('/approveVolunteer', (req, res)=>{
    const volunteerId = req.body.ids;
    //console.log(typeof benefactorId);

    //console.log(bId);
    Volunteer.findOne({"_id":volunteerId})
    .then(user=>{
        console.log(user);
        user.status=true;
        user.save();
    }).catch(
        err => null
    )


    res.json({msg:"test"})

})

module.exports = router;