const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    addresses: [{
        type: Schema.Types.ObjectId,
        ref: 'address'
    }],

    events: [{
        type: Schema.Types.ObjectId,
        ref: 'events'
    }],

    bio: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('profile', ProfileSchema);