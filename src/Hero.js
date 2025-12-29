import React from 'react';
import { MapPin, Users, Star, ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToSearch = () => {
        const element = document.getElementById('search');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToDestinations = () => {
        const element = document.getElementById('destinations');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://cdn.pixabay.com/video/2022/04/02/112722-695433093_large.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="badge">
                        <MapPin size={16} />
                        <span>Discover Chittagong Division</span>
                    </div>

                    <h1 className="hero-title">
                        Explore the Beauty of <br /> Chittagong
                    </h1>

                    <p className="hero-description">
                        From pristine beaches to lush hill tracts, discover the hidden gems and breathtaking landscapes that make Chittagong Division a traveler's paradise.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-hero-primary" onClick={scrollToDestinations}>
                            Explore Destinations
                        </button>
                        <button className="btn btn-hero-outline" onClick={scrollToSearch}>
                            Plan Your Trip
                        </button>
                    </div>

                    <div className="stats">
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Destinations</div>
                        </div>
                        <div className="stat-item stat-border">
                            <div className="stat-number">100K+</div>
                            <div className="stat-label">Happy Travelers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4.9★</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-wheel"></div>
            </div>
        </section>
    );
};

export default Hero;