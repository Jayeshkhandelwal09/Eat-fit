import React from "react";
import {Router , Route} from 'react-router-dom';
import Menu from "../components/Menu";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import Home from "../Pages/Home";
import Contact from "../components/Contact";

const Routes = () => {
  return (
    <div>
    <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
    </Router>
    </div>
  )
}

export default Routes