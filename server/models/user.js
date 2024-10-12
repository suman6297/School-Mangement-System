const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    class: { type: String, required: true },
    section: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},{
    timestamps:true
});

module.exports = mongoose.model('User', UserSchema);
