// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + (item.discountedPrice || item.price) * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      
      {/* Cart navbar - shown in both empty and non-empty states */}
      <div className="bg-purple-600 text-white p-4 ">
        <div className="flex justify-between items-center">
          <span className="font-semibold w-1/2">Book</span>
          <span className="font-semibold w-1/4 text-center">Quantity</span>
          <span className="font-semibold w-1/4 text-right">Price</span>
        </div>
      </div>
      
      {cartItems.length === 0 ? (
        <div className=" p-4 rounded-b-lg text-center">
          <img src="/emptyCart.svg" alt="Empty Cart" className="mx-auto w-1/3 mb-4" />
          <p className="text-xl mb-8">You don't have any books in your cart!</p>
          <Link to="/books" className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Browse books
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-purple-100 p-4 rounded-b-lg mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center py-4 border-b border-purple-200">
                <div className="w-1/2 flex items-center">
                  <img src={item.cover} alt={item.title} className="w-16 h-24 object-cover mr-4" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="w-1/4 flex justify-center items-center">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
                <div className="w-1/4 text-right font-bold">
                  ${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
