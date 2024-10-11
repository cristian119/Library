export function CTA (){
  return (
    <section className="bg-white py-16 container border-2 border-red-500">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-12 roboto-bold ">Why choose <span className="text-purple-600">Libary</span> </h1>
    
    <div className="space-y-12 lg:space-y-0 lg:flex lg:justify-between"> 
      <div className="lg:w-1/3 px-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>

        </div>
        <h2 className="text-xl font-semibold roboto-medium mb-2">Easy and Quick</h2>
        <p className="text-gray-600 roboto-medium">Get access to the book you purchased online instantly.</p>
      </div>
      
      <div className="lg:w-1/3 px-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

        </div>
        <h2 className="text-xl font-semibold roboto-medium mb-2">10,000+ Books</h2>
        <p className="text-gray-600 roboto-medium">Library has books in all your favourite <br /> categories.</p>
      </div>
      
      <div className="lg:w-1/3 px-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>
        </div>
        <h2 className="text-xl font-semibold roboto-medium mb-2">Affordable</h2>
        <p className="text-gray-600 roboto-medium">Get your hands on popular books for as little as $10.</p>
      </div>
    </div>
  </div>
</section>

  
  );
}

export default  CTA