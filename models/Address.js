const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AddressSchema = new Schema({
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
    provance: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('address', AddressSchema);