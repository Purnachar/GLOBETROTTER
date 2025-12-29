import React from 'react';

const VideoBackground = ({ className = "" }) => {
    return (
        <video
            className={`section-video-bg ${className}`}
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="https://cdn.pixabay.com/video/2022/04/02/112722-695433093_large.mp4" type="video/mp4" />
        </video>
    );
};

export default VideoBackground;
