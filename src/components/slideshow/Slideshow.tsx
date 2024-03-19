import React, { useState, useEffect } from 'react';
import './slideshow.css';

interface SlideshowProps {
  videos: string[]; // Array of video paths here
}

const Slideshow: React.FC<SlideshowProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Changing slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="slideshow">
      <video autoPlay muted loop controls>
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Slideshow;
