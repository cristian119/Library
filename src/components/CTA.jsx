import {Fade , Slide} from "react-awesome-reveal"

export function CTA (){
  return (
     <section className="bg-white py-16 container">
      <div className="max-w-6xl mx-auto text-center">
        <Slide triggerOnce={true} >
          
        <h1 className="text-4xl font-bold mb-12 roboto-bold">Why choose <span className="text-[#7342D6]">Library</span></h1>
                </Slide>

        <div className="space-y-12 lg:space-y-0 lg:flex lg:justify-between">
          <div className="lg:w-1/3 px-4 flex flex-col items-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white border-2 border-[#ccbaf0] flex items-center justify-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7342D6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7342D6" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold roboto-medium mb-2">Easy and Quick</h2>
            <p className="text-gray-600 roboto-medium max-w-xs text-center">Get access to the book you purchased online instantly.</p>
          </div>
          
          <div className="lg:w-1/3 px-4 flex flex-col items-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white border-2 border-[#ccbaf0] flex items-center justify-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7342D6" className="w-10 h-10">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold roboto-medium mb-2">10,000+ Books</h2>
            <p className="text-gray-600 roboto-medium max-w-xs text-center">Library has books in all your favourite categories.</p>
          </div>
          
          <div className="lg:w-1/3 px-4 flex flex-col items-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white border-2 border-[#ccbaf0] flex items-center justify-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="#7342D6" viewBox="0 0 24 24">
                <path d="M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold roboto-medium mb-2">Affordable</h2>
            <p className="text-gray-600 roboto-medium max-w-xs text-center">Get your hands on popular books for as little as $10.</p>
          </div>
        </div>
      </div>
    </section>

  
  );
}

export default  CTA