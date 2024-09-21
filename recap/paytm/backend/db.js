// simple solution

// const mongoose  = require("mongoose")

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     firstName: String,
//     lastName: String
// });

// // create a model from the schema
// const User = mongoose.model('User', userSchema);

// module.exports = {
//     User
// }

// elegant solution

// backend/db.js
const mongoose = require('mongoose');
const { number } = require('zod');

// Database connection function
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://saurabh:EvKJuuNxtsxWGxd0@cluster0.e8d2pel.mongodb.net/payTM", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           // To prevent deprecation warnings
            serverSelectionTimeoutMS: 20000
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, // reference to the User model
        ref: 'User',
        required: true
    }, 
    balance : {
        type:Number,
        required: true
    }
})

// Create a model from the schema

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    connectDB,
	User,
    Account
};


// mongodb uri mongodb+srv://saurabh:EvKJuuNxtsxWGxd0@cluster0.e8d2pel.mongodb.net/

// connecting to mongodb