const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BenificiarySchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('benificiary', BenificiarySchema);