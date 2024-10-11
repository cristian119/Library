import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import BookCard from '../BookCard';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function BookDetail({ booksData }) {
  ScrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();
  const book = booksData.find(book => book.id === parseInt(id));
  const { addToCart, cartItems } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    checkIfInCart();
  }, [cartItems]);

  const checkIfInCart = () => {
    setIsInCart(cartItems.some(item => item.id === book.id));
  };

  const handleAddToCart = () => {
    addToCart(book);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  // Get 4 random books for recommendations (excluding the current book)
  const recommendedBooks = booksData
    .filter(b => b.id !== book.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link to="/books" className="text-purple-600 hover:text-purple-800 mb-4 inline-block">
        ← Back to Books
      </Link>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/3 bg-gray-200">
          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-8">
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">
              {("★".repeat(Math.floor(book.rating)) + "☆".repeat(5 - Math.floor(book.rating))).slice(0, 5)}
            </span>
            <span className="ml-2 text-gray-600 text-lg">{book.rating.toFixed(1)} out of 5</span>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-bold text-purple-600">
              ${book.discountedPrice ? book.discountedPrice.toFixed(2) : book.price.toFixed(2)}
            </span>
            {book.discountedPrice && (
              <span className="ml-2 text-xl text-gray-500 line-through">${book.price.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={isInCart ? goToCart : handleAddToCart}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 mb-6"
          >
            {isInCart ? 'Go to Cart' : 'Add to Cart'}
          </button> 
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{book.summary}</p>
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recommended Books</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {recommendedBooks.map(recommendedBook => (
            <BookCard key={recommendedBook.id} book={recommendedBook} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
