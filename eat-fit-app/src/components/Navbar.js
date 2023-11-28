import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/eatfit-logo-horizontal.svg";
import WhatsAppImg from "../assets/images/WhatsApp logo.svg";
import AreaSelector from "../assets/images/area-selector.svg";
import Cart from "../assets/images/new-cart.svg";
import User from "../assets/images/user-image.svg";


const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bg-white z-50 flex flex-col justify-between  overflow-x-hidden items-center shadow-md font-brandon lg:flex-row">
      {/* Image section */}
      <div className="p-2 self-center lg:self-start">
        <img src={Logo} alt="logo" width="153px" height="44px" />
      </div>

      {/* Link section */}
      <div className="w-full lg:w-[500px] mt-4 lg:mt-0">
        <ul className="flex justify-around">
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <a href="#menu">Menu</a>
          </li>
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <a href="#testimonials">Testimonial</a>
          </li>
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <a href="#about">About us</a>
          </li>
        </ul>
      </div>

      {/* Login section */}
      <div className="hidden lg:flex justify-evenly w-[350px]">
        <div className="flex justify-around w-[220px] items-center">
          <img src={WhatsAppImg} width="30px" height="30px" alt="whatspp" />
          <img src={AreaSelector} width="30px" height="30px" alt="location" />
          <p className="text-base text-gray-600 font-semibold hover:text-customPink">
            Select Location
          </p>
          <img src={Cart} width="19px" height="34px" alt="cart" />
        </div>

        <div className="flex justify-between w-[65px] items-center">
          <img src={User} width="16px" height="16px" alt="user" />
          <p className="text-base text-gray-600 font-semibold hover:text-customPink">
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
