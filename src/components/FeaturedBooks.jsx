import { Link } from 'react-router-dom';
import { booksData } from '../data/booksData';
import BookCard from '../BookCard';  // Add this line


export function FeaturedBooks() {
  const featuredBooks = booksData.slice(0, 4); // Get first 4 books

  return (
    <section className="bg-[#f1ebfb] container border-2 border-red-500 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl roboto-medium font-bold mb-8 text-center">Featured <span className="text-[#7342D6]">Books</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default FeaturedBooks
