import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { CTA } from '../components/CTA';
import { FeaturedBooks } from '../components/FeaturedBooks';
import { DiscountBook } from '../components/DiscountBook';
import { ExploreBooks } from '../components/ExploreBooks';



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
<div className="relative w-full bg-purple-100 overflow-hidden">
      <div className="w-full flex flex-col items-center pb-32"> {/* Added padding bottom */}
        <HeroSection />
      </div>
      
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>

    
<div className="relative  w-screen h-auto bg-cover bg-center px-0 py-12 bg-white">
  <div className='"w-full  flex flex-col items-center z-10"'>
  <CTA />
  </div>
</div>

<div className="relative w-screen bg-purple-100 overflow-hidden">
  {/* Top Wave SVG */}
  <div className="absolute top-0 left-0 w-full overflow-hidden" >
    <svg 
      viewBox="0 0 1440 320" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <path 
        fill="#FFFFFF" // This should match the background color of the previous section (usually white)
        fillOpacity="1" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>

  {/* Content */}
  <div id='book' className="w-full flex flex-col items-center z-10 pt-60 px-4 py-12" > {/* Added pt-24 for top padding */}
  <FeaturedBooks />
  </div>
</div>


<div className="relative  w-screen h-auto bg-cover bg-center px-0 py-12 bg-white">
  <div className='"w-full  flex flex-col items-center z-10"'>
  <DiscountBook />
  </div>
</div>
<div className="relative  w-screen h-auto bg-cover bg-center px-0 py-12 bg-purple-100">
  <div className='"w-full  flex flex-col items-center z-10"'>
  <ExploreBooks />
  </div>
</div>
    </>
  );
}

export default Home;
