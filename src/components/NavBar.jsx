import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';


export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 w-full border-b-2 border-gray-300">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src="/logo.svg" alt="Home" className="h-14 w-auto cursor-pointer" />
            </Link>
          </div>
          
          {/* Spacer to push the following items to the right */}
          <div className="flex-grow"></div>
          
          {/* Desktop menu (visible on medium screens and larger) */}
          <div className="hidden md:flex items-center space-x-4 mr-4">
            <Link to="/" className="text-[#7342d6] hover:underline hover:text-purple-700 roboto-bold text-2xl">Home</Link>
            <Link to="/books" className="text-[#7342d6] hover:underline hover:text-purple-700 roboto-bold text-2xl">Books</Link>
          </div>
          
          {/* Mobile menu icon (visible on small screens) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-11 h-11 mr-2 text-[#7342d6]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          
            {/* Update the cart icon section */}
      <div className="flex items-center">
      <Link to="/cart" className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#7342d6]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartItems.length}
        </span>
      )}
    </Link>
      </div>
        </div>

        {/* Full-page Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#242424] z-50 flex flex-col">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <Link to="/" className="text-white roboto-bold text-4xl py-4" onClick={toggleMenu}>Home</Link>
              <Link to="/books" className="text-white roboto-bold text-4xl py-4" onClick={toggleMenu}>Books</Link>
              <Link to="/cart" className="text-white roboto-bold text-4xl py-4" onClick={toggleMenu}>Cart</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
