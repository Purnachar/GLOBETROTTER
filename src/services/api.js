import axios from 'axios';

const getBaseUrl = () => {
    let url = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    // Remove trailing slash if present to avoid double slashes
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    // Append /api if not present
    if (!url.endsWith('/api')) {
        url += '/api';
    }
    return url;
};

const API_BASE_URL = getBaseUrl();

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Destinations API
export const getDestinations = async () => {
    const response = await api.get('/destinations');
    return response.data;
};

export const getDestinationById = async (id) => {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
};

// Testimonials API
export const getTestimonials = async () => {
    const response = await api.get('/testimonials');
    return response.data;
};

// Contact API
export const submitContactForm = async (formData) => {
    const response = await api.post('/contact', formData);
    return response.data;
};

export const getContactMessages = async () => {
    const response = await api.get('/contact');
    return response.data;
};

export default api;
