import React from 'react';
import { MapPin, Star, Clock, Phone, Mail, Globe, MapPinIcon } from 'lucide-react';

const AccommodationCard = ({ accommodation }) => {
    return (
        <div className="accommodation-card">
            <div className="accommodation-image">
                <img src={accommodation.image} alt={accommodation.name} />
                <span className="accommodation-type-badge">{accommodation.type}</span>
            </div>

            <div className="accommodation-content">
                <div className="accommodation-header">
                    <h4>{accommodation.name}</h4>
                    <div className="accommodation-rating">
                        <Star size={16} fill="currentColor" />
                        <span>{accommodation.rating}</span>
                    </div>
                </div>

                <p className="accommodation-description">{accommodation.description}</p>

                <div className="accommodation-price">
                    <span className="price-label">Price Range:</span>
                    <span className="price-value">{accommodation.priceRange}</span>
                </div>

                <div className="accommodation-features">
                    <h5>Key Features:</h5>
                    <ul>
                        {accommodation.features.slice(0, 6).map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                        {accommodation.features.length > 6 && (
                            <li className="more-features">+{accommodation.features.length - 6} more amenities</li>
                        )}
                    </ul>
                </div>

                <div className="accommodation-contact">
                    <h5>Contact & Booking:</h5>
                    <div className="contact-info">
                        <div className="contact-item">
                            <Phone size={14} />
                            <a href={`tel:${accommodation.contact.phone}`}>{accommodation.contact.phone}</a>
                        </div>
                        <div className="contact-item">
                            <Mail size={14} />
                            <a href={`mailto:${accommodation.contact.email}`}>{accommodation.contact.email}</a>
                        </div>
                        <div className="contact-item">
                            <Globe size={14} />
                            <a href={`https://${accommodation.contact.website}`} target="_blank" rel="noopener noreferrer">{accommodation.contact.website}</a>
                        </div>
                        <div className="contact-item">
                            <MapPinIcon size={14} />
                            <span>{accommodation.contact.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccommodationCard;