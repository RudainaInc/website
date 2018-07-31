const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BenefactorSchema = new Schema({
    dietaryInfo: {
        type: String,
    },
    studentStatus: {
        type: String,
    },
    studentBirth: {
        type: String,
    },
    singleStatus: {
        type: String,
    },
    residencyStatus: {
        type: String,
    },
    exerciseCount: {
        type: String,
    },
    dietaryRequirement: {
        type: String,
    },
    smokeStatus: {
        type: String,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status:{
        type:String,
        require: true,
        default:"Pending"
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('benefactor', BenefactorSchema);