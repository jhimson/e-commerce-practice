/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { GrCart } from 'react-icons/gr';

const Navbar = () => {
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  return (
    <div>
      {/*  navbar goes here */}
      <nav className="font-bold bg-gray-700">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center px-2 py-5 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-1 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold text-white">JhimShop</span>
                </a>
              </div>

              {/* primary nav */}
              <div className="items-center hidden space-x-1 md:flex">
                <a
                  href="#"
                  className="px-3 py-5 text-white hover:text-gray-900"
                >
                  Search
                </a>
              </div>
            </div>
            {/* secondary nav */}
            <div className="items-center hidden space-x-1 md:flex">
              <a
                href="#"
                className="flex items-center px-3 py-5 space-x-2 text-white"
              >
                <GrCart size="1.5em" />
                <span>Cart</span>
              </a>
              <a
                href="#"
                className="px-3 py-2 text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
              >
                Sign In
              </a>
            </div>
            {/* mobile button goes here */}
            <div className="flex items-center text-white md:hidden">
              <button
                onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
              >
                <svg
                  className="w-6 h-6 focus:outline-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden ${
            mobileMenuIsVisible ? null : 'hidden'
          } px-2 pb-3`}
        >
          <a
            href="#"
            className="block px-4 py-2 mb-2 text-sm text-white hover:bg-gray-200"
          >
            Search
          </a>
          <a
            href="#"
            className="flex px-4 py-2 mb-2 space-x-1 text-sm text-white hover:bg-gray-200"
          >
            <GrCart size="1.5em" />
            <span>Cart</span>
          </a>
          <a
            href="#"
            className="inline-block px-3 py-2 mb-2 ml-4 text-sm text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
          >
            Sign up
          </a>
        </div>
      </nav>

      {/* content goes here */}

      {/* <div className="py-32 text-center">
        <h2 className="text-4xl font-extrabold">Navbar in Tailwind!</h2>
      </div> */}
    </div>
  );
};

export default Navbar;
