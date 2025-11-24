import { useEffect, useState } from "react";

const images = [
  "/lovable-uploads/6b4d4c0e-f8ec-4eac-a756-efb59da00924.png", // Selfie
  "/lovable-uploads/72b61009-d91f-458c-b969-148814a38d2a.png", // Beach
  "/lovable-uploads/3cc9add8-f902-4a73-bf78-c46fa42eed09.png"  // Silhouette
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
    <div className="w-full h-full flex items-center justify-center pt-20">
      {/* Polaroid Container with increased top padding */}
      <div
        className="relative bg-white pt-10 px-4 pb-16 shadow-2xl transform -rotate-2 transition-transform hover:rotate-0 hover:scale-105 duration-500 ease-out w-full max-w-md aspect-[3.5/4.2]"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0,0,0,0.05)"
        }}
      >
        {/* Image Frame */}
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden border border-gray-200">
          {images.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots at the Bottom (Simple, Non-Blinking) */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 shadow ${
                currentImage === index
                  ? "bg-red-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
