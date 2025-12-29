const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    priceRange: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String }],
    contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
        website: { type: String },
        address: { type: String, required: true }
    }
});

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    district: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    duration: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    tips: [{ type: String }],
    accommodations: [accommodationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);
