const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactUsSchema = new Schema({

    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type: Number,
        required:false
    },
    messages:{
        type: Text,
        required:true,
    },

});


module.exports = mongoose.model('contactus', ContactUsSchema);