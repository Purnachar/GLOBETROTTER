import React, { useState } from 'react';
import { MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!newsletterEmail) {
            alert('Please enter your email');
            return;
        }
        alert('Thanks for subscribing to our newsletter!');
        setNewsletterEmail('');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <MapPin size={24} />
                            </div>
                            <span>Globetrotter</span>
                        </div>
                        <p>
                            Your ultimate guide to exploring the breathtaking beauty of Chittagong Division.Discover hidden gems, plan perfect trips, and create unforgettable memories.
                        </p>
                        <div className="social-links">
                            <button className="social-btn" aria-label="Facebook">
                                <Facebook size={20} />
                            </button>
                            <button className="social-btn" aria-label="Twitter">
                                <Twitter size={20} />
                            </button>
                            <button className="social-btn" aria-label="Instagram">
                                <Instagram size={20} />
                            </button>
                            <button className="social-btn" aria-label="YouTube">
                                <Youtube size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#destinations">Destinations</a>
                        <a href="#features">Features</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#about">About Us</a>
                    </div>

                    <div className="footer-links">
                        <h4>Support</h4>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                        <a href="#help">Help Center</a>
                        <a href="#terms">Terms of Service</a>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Newsletter</h4>
                        <p>Subscribe to get special offers and travel tips!</p>
                        <form onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary btn-full">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>©2024 Globetrotter.All rights reserved.</p>
                    <div>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms & Conditions</a>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;