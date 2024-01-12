const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
    role: { type: String, required: true, enum: ['user', 'admin'] },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }], // Array of property IDs
    // Add other relevant fields
});

module.exports = mongoose.model('User', UserSchema);
