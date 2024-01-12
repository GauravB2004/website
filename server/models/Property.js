const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    location: String,
    images: [String], // Array of image URLs
    amenities: [String], // e.g., ['Pool', 'Gym', 'Park']
    area: Number,
    bedrooms: Number,
    bathrooms: Number,
    // Add other relevant fields
});

module.exports = mongoose.model('Property', PropertySchema);
