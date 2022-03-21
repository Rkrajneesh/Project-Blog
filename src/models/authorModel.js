const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required:"First name is required",
      
    },
    lname: {
        type: String,
        required: "Last name is required",
        trim : true
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required : "Title is required"
    },
    email: {
        type: String,
        trim : true,
        lowercase: true,
        unique: true,
        required: "Email is required",
        validate:{
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
       
    },
    password: {
        type: String,
        required: "Password is required"
    }
}, { timestamps: true });

module.exports = mongoose.model('blogProject_author', authorSchema) 



