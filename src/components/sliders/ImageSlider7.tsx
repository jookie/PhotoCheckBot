import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "./assets/SpaceCity1.jpg";
import city2 from "./assets/SpaceCity2.jpeg";
import city3 from "./assets/city3.png";
import planet1 from "./assets/planet1.png";
import planet2 from "./assets/planet2.png";
import SpaceCity2 from "./assets/SpaceCity2.jpeg";
import SpaceCity3 from "./assets/SpaceCity3.jpeg";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % positions.length
      );
      return updatedIndexes;
    });
  };

  const images = [
    city1,
    city2,
    city3,
    SpaceCity3,
    planet1,
    planet2,
    SpaceCity2,
  ];

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "right3",
    "right2",
    "right1",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-40%", scale: 0.7, zIndex: 4 },
    left2: { x: "-80%", scale: 0.5, zIndex: 3 },
    left3: { x: "-100%", scale: 0.3, zIndex: 2 },
    right3: { x: "100%", scale: 0.3, zIndex: 1 },
    right2: { x: "80%", scale: 0.5, zIndex: 3 },
    right1: { x: "40%", scale: 0.7, zIndex: 4 },
  };

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen w-screen">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] w-[200px] h-[300px] object-cover"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3 z-[20]">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;