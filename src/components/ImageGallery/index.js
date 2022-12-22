import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  const handleDownload = async (url, name) => {
    // Fetch the image as a blob
    const response = await fetch(url);
    const blob = await response.blob();
    // Create a virtual link element
    const link = document.createElement('a');
    // Set the link's href to the image blob
    link.href = window.URL.createObjectURL(blob);
    // Set the link's download attribute to the image name
    link.download = name;
    // Append the link to the body
    document.body.appendChild(link);
    // Click the link to trigger the download
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <div>
      {images.map(image => (
        <div key={image.id}>
          <img src={image.url} alt={image.name} />
          <button onClick={() => handleDownload(image.url, image.name)}>
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
