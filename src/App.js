import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SearchSection from './SearchSection';
import Destinations from './Destination';
import Features from './Features';
import Gallery from './Gallerys';
import Testimonials from './Testimonial';
import Contact from './Contact';
import InteractiveMap from './Map';
import Footer from './Footer';
import { getDestinations } from './services/api';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {
    const [destinations, setDestinations] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const data = await getDestinations();
                setDestinations(data);
            } catch (error) {
                console.error('Error fetching destinations:', error);
                // Fallback to local data if needed or handle error
            } finally {
                setLoading(false);
            }
        };
        fetchDestinations();
    }, []);

    const handleSearch = (district, searchTerm) => {
        if (district && district !== 'all') {
            setActiveFilter(district);
            // Scroll to destinations section
            const element = document.getElementById('destinations');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <ThemeProvider>
            <div className="App" >
                <Navbar />
                <Hero />
                <SearchSection onSearch={handleSearch} />
                <Destinations destinations={destinations}
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                />
                <Features />
                <InteractiveMap />
                <Gallery />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
