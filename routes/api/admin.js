const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const User = require('../../models/User');

const Benefactor = require('../../models/Benefactor');
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

module.exports = router;