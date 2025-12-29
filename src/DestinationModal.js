import React from 'react';
import { X, MapPin, Star, Clock, ChevronRight } from 'lucide-react';
import AccommodationCard from './AccommodationCard';

const DestinationModal = ({ destination, onClose }) => {
    if (!destination) return null;

    return (
        <div className="modal active" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-body">
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{destination.name}</h2>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                        <MapPin size={16} /> {destination.district}
                    </p>

                    <div style={{ position: 'relative', height: '20rem', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
                        <img src={destination.image} alt={destination.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                        <span className="section-badge">{destination.category}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={16} fill="var(--secondary)" color="var(--secondary)" />
                            <span style={{ fontWeight: 600 }}>{destination.rating} Rating</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--muted-foreground)' }}>
                            <Clock size={16} /> {destination.duration}
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>About</h4>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{destination.description}</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Travel Tips</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {destination.tips.map((tip, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                                    <ChevronRight size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.125rem' }} /> {tip}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                            Accommodation Options
                        </h3>
                        <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                            We've curated the best places to stay for your comfort. Each option includes detailed information, pricing, and direct booking contacts.
                        </p>

                        <div className="accommodations-grid">
                            {destination.accommodations.map((accommodation, index) => (
                                <AccommodationCard key={index} accommodation={accommodation} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationModal;