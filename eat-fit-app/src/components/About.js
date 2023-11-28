import React from 'react'


const About = () => {
  return (
    <div>
    <footer className="bg-blue text-white p-8">
      <div className="max-w-6xl mx-auto">
        
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">Curefoods India Pvt. Ltd.</p>
            <p className="text-sm">No. 72/4, Roopena Agrahara, Hosur Road, Madiwala Post, Bangalore, Karnataka, 560068 IN</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2"><a href="#menu">Menu</a></li>
              <li className="mb-2"><a href="#about">About Us</a></li>
              <li className="mb-2"><a href="#contact">Contact</a></li>
            </ul>
          </div>

        

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: <a href="mailto:hello@eatfit.in">hello@eatfit.in</a></p>
            <p className="text-sm">Phone: 9879844941849</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="text-white">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#" className="text-white">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#" className="text-white">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="#" className="text-white">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2023 EatFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default About