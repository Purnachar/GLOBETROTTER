import React, { useState } from 'react';
import { galleryImages } from './gallery';
import VideoBackground from './VideoBackground';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section id="gallery" className="gallery">
                <VideoBackground />
                <div className="section-overlay"></div>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge section-badge-accent">Photo Gallery</span>
                        <h2>Captured Moments</h2>
                        <p>Experience the beauty through the lens of fellow travelers</p>
                    </div>

                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="gallery-item" onClick={() => setSelectedImage(image)}>
                                <img src={image.url} alt={image.title} />
                                <div className="gallery-overlay">
                                    <h3 className="gallery-title">{image.title}</h3>
                                    <p className="gallery-location">{image.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div className="modal active" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div style={{ position: 'relative' }}>
                            <img src={selectedImage.url} alt={selectedImage.title} style={{ width: '100%', borderRadius: '0.5rem' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.25rem' }}>{selectedImage.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)' }}>{selectedImage.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;