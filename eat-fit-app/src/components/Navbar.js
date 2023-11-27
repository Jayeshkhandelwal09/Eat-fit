// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/eatfit-logo-horizontal.svg"
import WhatsAppImg from "../images/WhatsApp logo.svg"
import AreaSelector from "../images/area-selector.svg"
import Cart from "../images/new-cart.svg"
import User from "../images/user-image.svg"

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between m-3 overflow-x-hidden items-center shadow-md font-brandon lg:flex-row">
      {/* Image section */}
      <div className="p-2 self-center lg:self-start">
        <img src={Logo} alt="" width="153px" height="44px" />
      </div>

      {/* Link section */}
      <div className="w-full lg:w-[500px] mt-4 lg:mt-0">
        <ul className="flex justify-around">
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <Link to="/">Menu</Link>
          </li>
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <Link to="/about">About us</Link>
          </li>
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <Link to="/testimonials">Testimonial</Link>
          </li>
          <li className="text-base text-gray-600 font-semibold hover:text-customPink">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Login section */}
      <div className="hidden lg:flex justify-evenly w-[350px]">
        <div className="flex justify-around w-[220px] items-center">
          <img src={WhatsAppImg} width="30px" height="30px" alt="" />
          <img src={AreaSelector} width="30px" height="30px" />
          <p className="text-base text-gray-600 font-semibold hover:text-customPink">
            Select Location
          </p>
          <img src={Cart} width="19px" height="34px" alt="" />
        </div>

        <div className="flex justify-between w-[65px] items-center">
          <img src={User} width="16px" height="16px" alt="" />
          <p className="text-base text-gray-600 font-semibold hover:text-customPink">
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
