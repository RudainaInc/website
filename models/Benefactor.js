const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BenefactorSchema = new Schema({
    info: {
        type: String,
        required: true
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