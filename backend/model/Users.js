const mongoose = require('mongoose');

// User mmodel
const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    userName:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balacne:{
        type: Number
    },
    walletAddr: {
        type: String
    },
    privateKey: {
        type: String
    },
    nftList: {
        type: Array
    }
    
});


module.exports = mongoose.model('Users', UserSchema);
