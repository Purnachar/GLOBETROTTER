import React, { useMemo, useState, useEffect } from 'react';
import { getDestinations } from './services/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const InteractiveMap = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const data = await getDestinations();
                // Filter only destinations with coordinates if needed, 
                // but assuming they all have coords from seed.js or we add them.
                // For now use the names to map to coordinates if backend doesn't have them yet.
                const coordsMap = {
                    "Cox's Bazar": [21.4272, 92.0058],
                    "Bandarban": [22.1953, 92.2184],
                    "Rangamati": [22.6574, 92.1733],
                    "Chattogram City": [22.3569, 91.7832],
                    "Saint Martin's Island": [20.6277, 92.3233],
                    "Khagrachari": [23.1192, 91.9841]
                };

                const mappedData = data.map(dest => ({
                    ...dest,
                    coords: dest.coords || coordsMap[dest.name] || [21.8, 92.1]
                }));

                setDestinations(mappedData);
            } catch (error) {
                console.error('Error fetching map destinations:', error);
            }
        };
        fetchDestinations();
    }, []);

    const customIcon = useMemo(() => new L.Icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    }), []);

    return (
        <section id="map" className="map-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge section-badge-accent">Interactive Map</span>
                    <h2>Explore the Region</h2>
                    <p>Locate your next adventure on the map and see proximity between destinations</p>
                </div>

                <div className="map-container-wrapper">
                    <MapContainer
                        center={[21.8, 92.1]}
                        zoom={8}
                        scrollWheelZoom={false}
                        className="leaflet-container-custom"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {destinations.map((dest) => (
                            <Marker
                                key={dest._id || dest.id}
                                position={dest.coords}
                                icon={customIcon}
                            >
                                <Popup>
                                    <div className="map-popup">
                                        <h3 style={{ margin: '0 0 5px 0' }}>{dest.name}</h3>
                                        <p style={{ margin: '0 0 10px 0' }}>{dest.description}</p>
                                        <a href={`#destinations`} style={{ fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>View Details</a>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default InteractiveMap;
