const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const User = require('../../models/User');

const Benefactor = require('../../models/Benefactor');
const Volunteer = require('../../models/Volunteer');

const User = require('../../models/User');

const MakeUserObj = (user) => {
    return {
        fname: user.user.fname,
        lname: user.user.lname,
        email: user.user.email,
        status: user.status,
        id: user.id
    }
};

router.get('/getBenefactorUsers', (req, res) =>{
    const benefactor = [];
    Benefactor.find()
    .populate("user")
    .then( users => {
        for (i=0; i < users.length; ++i) {
            const user = MakeUserObj(users[i]);
            benefactor.push(user);
        }
        res.json(benefactor);
    });
})

router.post('/approveBenefactor', (req, res)=>{
    const benefactorId = req.body.ids;
    Benefactor.findOne({"_id":benefactorId})
    .then(user=>{
        user.status="Approved";
        user.save();
    }).catch(
        err => null
    )
})

router.post('/disableBenefactor', (req, res)=>{
    const benefactorId = req.body.ids;
    Benefactor.findOne({"_id":benefactorId})
    .then(user=>{
        user.status="Disabled";
        user.save();
    }).catch(
        err => null
    )
})

router.get('/getVolunteerUsers', (req, res) =>{
    const volunteer = [];
    Volunteer.find()
    .populate("user")
    .then( users => {
        for (i=0; i < users.length; ++i) {
            const user = MakeUserObj(users[i]);
            volunteer.push(user);
        }
        res.json(volunteer);
    });
})

router.post('/approveVolunteer', (req, res)=>{
    const volunteerId = req.body.ids;
    Volunteer.findOne({"_id":volunteerId})
    .then(user=>{
        user.status="Approved";
        user.save();
    }).catch(
        err => null
    )
    res.json({msg:"test"})

})

router.post('/disableVolunteer', (req, res)=>{
    const volunteerId = req.body.ids;
    Volunteer.findOne({"_id":volunteerId})
    .then(user=>{
        user.status="Disabled";
        user.save();
    }).catch(
        err => null
    )
    res.json({msg:"test"})

})

module.exports = router;