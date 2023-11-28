// ProductModal.js
import React from "react";

const ProductModal = ({ food, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-filter backdrop-blur-md m-2">
      <div className="bg-white p-8 max-w-md mx-auto rounded-md shadow-md">
        <div className="flex">
          <div className="w-1/2 pr-4">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <p className="text-xl font-semibold mb-2">{food.name}</p>
            <p className="text-gray-600 mb-4">{food.description}</p>
            <p className="text-customPink font-semibold">${food.price}</p>
             
            <button
              className="bg-customPink text-white px-3 py-1 rounded-md mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
