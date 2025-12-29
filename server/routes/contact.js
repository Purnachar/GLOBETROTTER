const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST contact form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, destination, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required' });
        }

        const contact = new Contact({
            name,
            email,
            phone,
            destination,
            message
        });

        const savedContact = await contact.save();
        res.status(201).json({
            message: 'Contact form submitted successfully',
            data: savedContact
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET all contact submissions (for admin)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ submittedAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
