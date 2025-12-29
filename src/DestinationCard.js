import React from 'react';
import { MapPin, Star, Clock, ChevronRight } from 'lucide-react';

const DestinationCard = ({ destination, onClick }) => {
    return (
        <div className="destination-card" onClick={() => onClick(destination)}>
            <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <span className="destination-category">{destination.category}</span>
            </div>

            <div className="destination-content">
                <div className="destination-header">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-location">
                        <MapPin size={14} /> {destination.district}
                    </p>
                </div>

                <p className="destination-description">{destination.description}</p>

                <div className="destination-meta">
                    <div className="destination-rating">
                        <Star size={16} fill="currentColor" />
                        <span>{destination.rating}</span>
                    </div>
                    <div className="destination-duration">
                        <Clock size={16} /> {destination.duration}
                    </div>
                </div>
            </div>

            <div className="destination-footer">
                <button className="view-details-btn">
                    View Details <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default DestinationCard;