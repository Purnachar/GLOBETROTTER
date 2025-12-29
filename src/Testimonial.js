import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { getTestimonials } from './services/api';
import { testimonials as localTestimonials } from './testimonials';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(localTestimonials);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const data = await getTestimonials();
                setTestimonials(data);
            } catch (err) {
                console.log('Using local testimonials data (backend not available)');
                // Fallback to local data - already set in initial state
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge section-badge-accent">Testimonials</span>
                    <h2>Travelers Love Us</h2>
                    <p>Hear from fellow explorers who discovered Chittagong's beauty with Globetrotter</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <Quote className="quote-icon" size={32} />
                            <div className="testimonial-rating">
                                {Array(testimonial.rating).fill(0).map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div>
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;