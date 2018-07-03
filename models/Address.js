const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AddressSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    addr: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    prov: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('address', AddressSchema);