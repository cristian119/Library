const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export function HeroSection(){
  return (
    <div className="container mx-auto relative z-10">
      <section className="text-center pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-[56px] font-extrabold mb-4 roboto-bold   text-[#7342D6] ">Australia's most awarded online library platform</h1>
          <h2 className="text-3xl mb-8 font-extrabold mt-4 roboto-bold  text-black ">Find your dream book with <span className="text-[#7342D6]">Library</span> </h2>
          <button  onClick={() => scrollToSection('book')}  className="bg-[#7342D6] text-white roboto-bold text-[20px] px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Browse books
          </button>
        </div>
      </section>
      
      <section className="mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <img src="/book.svg" alt="Book illustration" className="w-full" />
        </div>
      </section>
    </div>




  );
}

export default HeroSection
