import {React, useState } from "react";
import svglogo from "../assets/images/eatfit.svg";
import ProductModal from "./ProductModal";

const MenuCard = ({ food }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden rounded-md shadow-md hover:shadow-lg bg-gradient-to-b from-gray-100 via-white to-gray-100 transition-transform duration-300 transform hover:-translate-y-2 m-3 ">
      <div className="relative overflow-hidden h-52 mb-1 ">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-20"></div>
        <img
          src={svglogo}
          alt="Eat Fit"
          className="absolute bottom-0 left-0 ml-4 mb-4 w-16 h-16"
        />
      </div>
      <div className="p-2">
        <p className="text-xl font-semibold">{food.name}</p>
        <p className="text-gray-600">{food.description}</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <p className="text-customPink font-semibold mr-2">${food.price}</p>
        <button className="bg-customPink text-white px-3 py-1 rounded-md font-bold transition duration-300 transform hover:scale-105 hover:bg-opacity-90" onClick={openModal} >
          ADD
        </button>

        {isModalOpen && (
        <ProductModal food={food} closeModal={closeModal} />
      )}
        
      </div>
    </div>

    
  );
};

export default MenuCard;
