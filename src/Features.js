import React from 'react';
import { Map, Compass, Camera, Users, Shield, MapPin } from 'lucide-react';

const Features = () => {
    const features = [{
        icon: <Map size={32} />,
        title: 'Interactive Maps',
        description: 'Navigate with ease using our detailed interactive maps and location guides.'
    },
    {
        icon: <Compass size={32} />,
        title: 'Curated Routes',
        description: 'Discover the best travel routes and itineraries crafted by local experts.'
    },
    {
        icon: <Camera size={32} />,
        title: 'Photo Gallery',
        description: 'Get inspired by stunning photography from travelers around the world.'
    },
    {
        icon: <Users size={32} />,
        title: 'Local Guides',
        description: 'Connect with experienced local guides for authentic travel experiences.'
    },
    {
        icon: <Shield size={32} />,
        title: 'Safe Travel',
        description: 'Access safety tips and guidelines for a secure and worry-free journey.'
    },
    {
        icon: <MapPin size={32} />,
        title: 'Hidden Gems',
        description: 'Uncover secret spots and off-the-beaten-path destinations.'
    }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge section-badge-secondary">Why Choose Globetrotter?</span>
                    <h2>Everything you need for an unforgettable journey through Chittagong Division</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;