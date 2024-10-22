import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8  text-center">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          TechZone is a leading institution committed to educating future tech professionals. We cultivate skills from the foundation, building a dynamic community of innovators and technology enthusiasts.          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
           
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 justify-center">
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Sarsawa, Saharanpur</p>
          <p>Pincode: 247232</p>
          <p>Email: itsTechZone@gmail.com</p>
          <p>Phone: (+91) 7247885692</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 TechZone. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;