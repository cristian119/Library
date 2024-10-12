import { Link } from "react-router-dom";
export function Footer () {
  return (
    <footer className="bg-[#242424] container  text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center mb-4">
      <div className="flex items-center mb-4">
      <img src="/logo.svg" alt="" className="h-16 w-96 text-white filter invert brightness-0 " />

      </div>
    </div>
  <nav className="flex justify-center space-x-6 mb-4">
  <Link to="/" className="hover:text-purple-400">Home</Link>
  <span className="hover:text-purple-400 cursor-not-allowed">About</span>
  <Link to="/books" className="hover:text-purple-400">Books</Link>
  <Link to="/cart" className="hover:text-purple-400">Cart</Link>
</nav>

    <p className="text-center text-sm">
      Copyright © 2024 Library
    </p>
  </div>
</footer>
  );
}

export default  Footer