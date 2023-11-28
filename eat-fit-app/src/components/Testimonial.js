import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../assets/foodimg/tranding-food-1.png";
import image2 from "../assets/foodimg/tranding-food-2.png";
import image3 from "../assets/foodimg/tranding-food-3.png";
import image4 from "../assets/foodimg/tranding-food-4.png";
import image5 from "../assets/foodimg/tranding-food-5.png";
import image6 from "../assets/foodimg/tranding-food-6.png";
import image7 from "../assets/foodimg/tranding-food-7.png";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const images = [
    { src: image1, description: "Delicious Dish 1" },
    { src: image2, description: "Mouth-watering Dish 2" },
    { src: image3, description: "Tasty Treat 3" },
    { src: image4, description: "Savory Delight 4" },
    { src: image5, description: "Yummy Creation 5" },
    { src: image6, description: "Flavorful Dish 6" },
    { src: image7, description: "Delectable Cuisine 7" },
  ];
  
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          {images.map((image, index) => (
            <div key={index} className="relative m-4">
              <img src={image.src} alt={`Item ${index + 1 }`} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 text-white p-4">
                <p className="text-lg font-bold">{image.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
