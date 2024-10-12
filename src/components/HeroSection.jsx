import { Fade, Slide } from "react-awesome-reveal";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export function HeroSection(){
  return (
<div className="container mx-auto relative z-10">
      <section className="text-center pt-8 sm:pt-16 pb-4 sm:pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <Fade direction="down" duration={1500} triggerOnce={true}>
            <h1 className="text-[28px] sm:text-[37px] md:text-[56px] font-extrabold mb-6 sm:mb-4 roboto-bold text-[#7342D6]">
              Australia's most awarded online library platform
            </h1>
          </Fade>

          <Fade direction="up" duration={1500} triggerOnce={true}>
            <h2 className="text-[20px] sm:text-[26px] md:text-3xl mb-4 sm:mb-8 font-extrabold mt-2 sm:mt-4 roboto-bold text-black">
              Find your dream book with <span className="text-[#7342D6]">Library</span>
            </h2>
          </Fade>
          <button onClick={() => scrollToSection('book')} className="bg-[#7342D6] text-white roboto-bold text-lg sm:text-[20px] px-4 sm:px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Browse books
          </button>
        </div>
      </section>
      
      <section className="mt-4 sm:mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <img src="/book.svg" alt="Book illustration" className="w-full" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection
