// src/BookCard.jsx
import { Link } from 'react-router-dom';

export function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`} className="block">
      <div className="flex cursor-pointer flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
        <img src={book.cover} alt={book.title} className="w-48 h-64 object-cover mb-4"/>
        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
        <div className="flex mb-1">
          <span className="text-yellow-400">
            {("★".repeat(Math.floor(book.rating)) + "☆".repeat(5 - Math.floor(book.rating))).slice(0, 5)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {book.discountedPrice ? (
            <>
              <p className="font-bold text-gray-400 line-through">${book.price.toFixed(2)}</p>
              <p className="font-bold text-purple-600">${book.discountedPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="font-bold text-purple-600">${book.price.toFixed(2)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
