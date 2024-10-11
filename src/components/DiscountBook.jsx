import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../BookCard';
import { booksData } from '../data/booksData';  // Import the booksData

export function DiscountBook() {
  // Filter books that have a discountedPrice
  const discountBooks = booksData.filter(book => book.discountedPrice);

  return (
    <section className="bg-white container border-2 border-red-500 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl roboto-medium font-bold mb-8 text-center">Discount <span className="text-[#7342D6]">Books</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {discountBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default DiscountBook;
