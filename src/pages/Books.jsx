import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '../data/booksData';







function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`}>

    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer flex flex-col w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="relative pt-[140%]">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-sm font-semibold mb-2 h-10 overflow-hidden">{book.title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-sm">{("★".repeat(Math.floor(book.rating)) + "☆".repeat(5 - Math.floor(book.rating))).slice(0, 5)}</span>
          <span className="ml-1 text-sm text-gray-600">{book.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between">
          {book.discountedPrice ? (
            <>
              <p className="text-gray-500 line-through text-sm">${book.price.toFixed(2)}</p>
              <p className="text-purple-600 font-bold text-sm">${book.discountedPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-purple-600 font-bold text-sm">${book.price.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
}


function Books() {
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedBooks = [...booksData].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return (a.discountedPrice || a.price) - (b.discountedPrice || b.price);
      case 'price-high-low':
        return (b.discountedPrice || b.price) - (a.discountedPrice || a.price);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Books</h1>
        <div className="flex items-center">
          <span className="mr-2">Sort by:</span>
          <select
            className="border rounded p-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {sortedBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Books;
