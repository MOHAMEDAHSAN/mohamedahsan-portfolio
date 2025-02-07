
import { useEffect, useState } from 'react';

const images = [
  "/lovable-uploads/6b4d4c0e-f8ec-4eac-a756-efb59da00924.png",
  "/lovable-uploads/72b61009-d91f-458c-b969-148814a38d2a.png",
  "/lovable-uploads/3cc9add8-f902-4a73-bf78-c46fa42eed09.png"
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="clip-hex w-full h-full relative">
            <img
              src={img}
              alt={`Profile ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentImage === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
