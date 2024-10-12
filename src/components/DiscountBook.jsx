import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../BookCard';
import { booksData } from '../data/booksData';  // Import the booksData
import { Slide , Fade } from "react-awesome-reveal" // Import the Slide component from react-awesome-reveal

export function DiscountBook() {
  // Filter books that have a discountedPrice
  const discountBooks = booksData.filter(book => book.discountedPrice);

  return (
    <section className="bg-white container  py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Slide triggerOnce={true}  >
        <h2 className="text-[28px] sm:text-[37px]  roboto-medium font-bold mb-8 text-center">Discount <span className="text-[#7342D6]">Books</span></h2>
        </Slide>
      

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {discountBooks.map(book => (
        <Fade delay={500} key={book.id} triggerOnce={true} duration={1000}>
          <BookCard book={book} />
        </Fade>
      ))}
    </div>
        
      </div>
    </section>
  );
}

export default DiscountBook;
