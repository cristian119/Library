import { Link } from 'react-router-dom';
import { booksData } from '../data/booksData';
import BookCard from '../BookCard';  // Add this line
import { Slide , Fade } from "react-awesome-reveal" // Add this line


export function FeaturedBooks() {
  const featuredBooks = booksData.slice(0, 4); // Get first 4 books

  return (
    <section className="bg-[#f1ebfb] container  py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Slide triggerOnce={true} direction='right'>
        <h2 className="text-3xl roboto-medium font-bold mb-8 text-center">Featured <span className="text-[#7342D6]">Books</span></h2>
        </Slide>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {featuredBooks.map(book => (
        <Fade delay={500} key={book.id} triggerOnce={true} duration={1000}>
          <BookCard book={book} />
        </Fade>
      ))}
    </div>
      </div>
    </section>
  );  
}


export default FeaturedBooks
