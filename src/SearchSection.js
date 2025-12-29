import React, { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

const SearchSection = ({ onSearch }) => {
    const [destination, setDestination] = useState('');
    const [district, setDistrict] = useState('');

    const handleSearch = () => {
        if (!destination && !district) {
            alert('Please select a destination or district');
            return;
        }
        onSearch(district || 'all', destination);
    };

    const quickFilters = ["Cox's Bazar", "Rangamati", "Bandarban", "Chittagong City"];

    return (
        <section id="search" className="search-section">
            <div className="container">
                <div className="search-card">
                    <div className="search-grid">
                        <div className="search-field">
                            <label>
                                <MapPin size={16} />
                                <span>Destination</span>
                            </label>
                            <input
                                type="text"
                                id="destinationInput"
                                placeholder="Where do you want to go?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>

                        <div className="search-field">
                            <label>
                                <Calendar size={16} />
                                <span>District</span>
                            </label>
                            <select
                                id="districtSelect"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <option value="">Select district</option>
                                <option value="Chattogram District">Chattogram District</option>
                                <option value="Chittagong Hill Districts">Chittagong Hill Districts</option>
                                <option value="Cox's Bazar District">Cox's Bazar District</option>
                            </select>
                        </div>

                        <button className="btn btn-primary btn-search" onClick={handleSearch}>
                            <Search size={20} />
                            Search
                        </button>
                    </div>

                    <div className="quick-filters">
                        <span>Popular:</span>
                        {quickFilters.map((place, index) => (
                            <button
                                key={index}
                                className="filter-btn"
                                onClick={() => setDestination(place)}
                            >
                                {place}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;