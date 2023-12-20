import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Vehicle Mart</h2>
            <p className="text-sm">
              Vehicle Mart is your one-stop shop for buying and selling vehicles hassle-free.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300 transition duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              1234 Auto Avenue <br />
              City, State 12345 <br />
              Email: info@vehiclemart.com <br />
              Phone: 1-800-AUTO-SALE
            </p>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} VehicleMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
