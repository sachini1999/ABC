// frontend/src/components/Gallery.js
import React, { useEffect, useState } from 'react';
import './Gallery.css'; 



const Gallery = () => {
  const [galleryData, setGalleryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery'); 
        const data = await response.json();
        setGalleryData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch gallery data.');
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Menu Introduction Section */}
      <section className="menu-in">
        <div className="intro-c">
          <h2> Gallery</h2>
          <p>
            {/* Add Menu Main Content */}
          </p>
        </div>

      
      </section>

      {/* Gallery Main Section */}
      <main className="gallery-main">
        <section className="gallery">
          {Object.entries(galleryData).map(([heading, images]) => (
            <div key={heading}>
              <h2>{heading}</h2>
              <div className="image-grid">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000/gallery/${image.filename}`}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Gallery;
