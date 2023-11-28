import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="menu">
        <Menu />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
