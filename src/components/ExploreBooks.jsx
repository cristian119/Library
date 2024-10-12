import { Link } from 'react-router-dom';



export function ExploreBooks () {
  return (
     
<section className="bg-[#f1ebfb] container  py-16 text-center">
  <h2 className="text-3xl roboto-medium font-bold mb-4">Explore more <span className="text-[#7342D6]">Books</span></h2>
  <Link to="/books" className="inline-block bg-[#7342D6] text-[20px] roboto-medium text-white px-6 py-2 rounded-md hover:bg-purple-700 hover:text-white transition duration-300">
  Explore books
</Link>
</section>
  );
} 

export default  ExploreBooks