require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const destinationRoutes = require('./routes/destinations');
const testimonialRoutes = require('./routes/testimonials');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL, 'https://globetrotter-frontend.onrender.com']
        : '*',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use('/images', express.static('public/images'));


// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Globetrotter API',
        version: '1.0.0',
        endpoints: {
            destinations: '/api/destinations',
            testimonials: '/api/testimonials',
            contact: '/api/contact',
            health: '/api/health'
        }
    });
});

// Health check route
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
