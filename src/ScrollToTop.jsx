import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="relative w-screen h-auto bg-cover bg-center px-0 py-8 ">
        <div className="w-screen flex flex-col items-center z-10">
          <NavBar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>

      <div className="relative w-screen h-auto bg-cover bg-center px-0 py-12 bg-[#242424]">
        <div className="w-full flex flex-col items-center z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
