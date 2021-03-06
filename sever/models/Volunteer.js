const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VolunteerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    info: {
        type: String,
        required: true
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

module.exports = mongoose.model('volunteer', VolunteerSchema);