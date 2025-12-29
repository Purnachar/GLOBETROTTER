import React, { useState } from 'react';
import { Menu, X, MapPin, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <div className="nav-content">
                    <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        <div className="logo-icon">
                            <MapPin size={24} />
                        </div>
                        <span>Globetrotter</span>
                    </a>

                    <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <a href="#destinations" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('destinations'); }}>Destinations</a>
                        <a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
                        <a href="#map" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('map'); }}>Explore Map</a>
                        <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
                        <a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Reviews</a>
                        <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--foreground)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease'
                            }}
                            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;