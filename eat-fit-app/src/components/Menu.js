import React, { useState } from "react";
import useFoodService from "./FoodService";
import MenuCard from "./MenuCard";
import Spinner from "./Spinner";



const Menu = () => {
  const foods = useFoodService();
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterByName, setFilterByName] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");

  const handleSortChange = (value) => {
    const [newSortBy, newSortOrder] = value.split("-");
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  const handleNameFilterChange = (value) => {
    setFilterByName(value);
  };

  const handleCategoryFilterChange = (value) => {
    setFilterByCategory(value);
  };

  const filteredAndSortedFoods = foods
    .filter((food) =>
      food.name.toLowerCase().includes(filterByName.toLowerCase())
    )
    .filter((food) =>
      filterByCategory ? food.category.toLowerCase() === filterByCategory : true
    )
    .sort((a, b) => {
      if (sortBy === "price") {
        const priceComparison = a.price - b.price;
        return sortOrder === "asc" ? priceComparison : -priceComparison;
      } else {
        const nameComparison = a.name.localeCompare(b.name);
        return sortOrder === "asc" ? nameComparison : -nameComparison;
      }
    });
    

  return (
    <div>
      {/* Sorting and Filtering Controls - Displayed at the top on large screens */}
      <div className="lg:flex lg:justify-between lg:items-center lg:bg-white lg:p-4 lg:mb-4 lg:z-10 hidden sm:hidden md:hidden mt-16 ">
        <div className="lg:w-1/3">
          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border p-1 rounded-md w-full"
          >
            <option value="price-asc">Low to High Price</option>
            <option value="price-desc">High to Low Price</option>
            <option value="name-asc">A to Z</option>
            <option value="name-desc">Z to A</option>
          </select>
        </div>
        <div className="lg:w-1/3">
          <input
            type="text"
            placeholder="Search by Name"
            className="border p-1 rounded-md w-full"
            value={filterByName}
            onChange={(e) => handleNameFilterChange(e.target.value)}
          />
        </div>
        <div className="lg:w-1/3">
          <select
            value={filterByCategory}
            onChange={(e) => handleCategoryFilterChange(e.target.value)}
            className="border p-1 rounded-md w-full"
          >
            <option value="">Filter</option>
            <option value="vegan">Vegan</option>
            <option value="seafood">Seafood</option>
            <option value="pasta">Pasta</option>
            <option value="sandwiches">Sandwiches</option>
          </select>
        </div>
      </div>

       {/* Display Menu Cards or Rotating Image Spinner */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-28 lg:mt-0">
        {foods.length > 0 ? (
          filteredAndSortedFoods.map((food) => (
            <MenuCard key={food.id} food={food}  />
          ))
        ) : (
          <Spinner />
        )}
      </div>


     

      {/* Sorting and Filtering Controls - Fixed at the bottom on small and medium screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 z-10 sm:block md:block lg:hidden  ">
        <div className="flex justify-between">
          {/* Sorting Dropdown */}
          <div className="w-1/3">
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border p-1 rounded-md w-full"
            >
              <option value="">Sort</option>
              <option value="price-asc">Low to High Price</option>
              <option value="price-desc">High to Low Price</option>
              <option value="name-asc">A to Z</option>
              <option value="name-desc">Z to A</option>
            </select>
          </div>
          {/* Filtering by Name Input */}
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Filter by Name"
              className="border p-1 rounded-md w-full"
              value={filterByName}
              onChange={(e) => handleNameFilterChange(e.target.value)}
            />
          </div>
          {/* Filtering by Category Dropdown */}
          <div className="w-1/3">
            <select
              value={filterByCategory}
              onChange={(e) => handleCategoryFilterChange(e.target.value)}
              className="border p-1 rounded-md w-full"
            >
              <option value="">Filter</option>
              <option value="vegan">Vegan</option>
              <option value="seafood">Seafood</option>
              <option value="pasta">Pasta</option>
              <option value="sandwiches">Sandwiches</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
