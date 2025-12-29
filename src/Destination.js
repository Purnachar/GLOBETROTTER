import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import DestinationModal from './DestinationModal';
import VideoBackground from './VideoBackground';

const Destinations = ({ destinations, activeFilter, onFilterChange }) => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    const filters = [
        { label: 'All Destinations', value: 'all' },
        { label: 'Chattogram District', value: 'Chattogram District' },
        { label: 'Chittagong Hill Districts', value: 'Chittagong Hill Districts' },
        { label: "Cox's Bazar District", value: "Cox's Bazar District" }
    ];

    const filteredDestinations = activeFilter === 'all' ?
        destinations :
        destinations.filter(d => d.district === activeFilter);

    return (
        <>
            <section id="destinations" className="destinations">
                <VideoBackground />
                <div className="section-overlay"></div>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Destination</span>
                        <h2>Discover Amazing Places</h2>
                        <p>Explore the most beautiful and captivating destinations across Chittagong Division</p>
                    </div>

                    <div id="districtFilters" className="category-filters">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                                data-district={filter.value}
                                onClick={() => onFilterChange(filter.value)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="destinations-grid">
                        {filteredDestinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                                onClick={setSelectedDestination}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {selectedDestination && (
                <DestinationModal
                    destination={selectedDestination}
                    onClose={() => setSelectedDestination(null)}
                />
            )}
        </>
    );
};

export default Destinations;