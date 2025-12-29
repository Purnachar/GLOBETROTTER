import React, { useState } from 'react';
import { Mail, Phone, MapPin, LayoutDashboard } from 'lucide-react';
import VideoBackground from './VideoBackground';
import { submitContactForm } from './services/api';
import AdminDashboard from './AdminDashboard';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showDashboard, setShowDashboard] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        setLoading(true);
        setSubmitStatus(null);

        try {
            await submitContactForm(formData);
            setSubmitStatus('success');
            alert("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
        } catch (error) {
            // If backend is not running, still show success to user
            console.log('Backend not available - form data not saved');
            setSubmitStatus('success');
            alert("Message received! (Note: Backend is not running, so this won't be saved to database)");
            setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="contact">
            <VideoBackground />
            <div className="section-overlay"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Contact Us</span>
                    <h2>Plan Your Journey</h2>
                    <p>Get in touch with us to start planning your perfect Chittagong adventure</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon info-icon-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <p>info@globetrotter.com</p>
                                <p>support@globetrotter.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon info-icon-accent">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+880 1234-567890</p>
                                <p>+880 1234-567891</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon info-icon-secondary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4>Visit Us</h4>
                                <p>123 Mojaffornagar</p>
                                <p>Chittagong, Bangladesh</p>
                                <button
                                    onClick={() => setShowDashboard(true)}
                                    className="dashboard-link-btn"
                                    style={{
                                        marginTop: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--secondary)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        background: 'none',
                                        padding: 0
                                    }}
                                >
                                    <LayoutDashboard size={16} /> View Dashboard
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h3>Send us a Message</h3>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-field">
                                    <label>Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Preferred Destination</label>
                                    <input
                                        type="text"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label>Message *</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                >
                                </textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {showDashboard && (
                <AdminDashboard onClose={() => setShowDashboard(false)} />
            )}
        </section>
    );
};

export default Contact;