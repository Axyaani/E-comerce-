import React from "react";

const Categories = () => {
  return (
    <section className="relative py-16 px-4 lg:px-20 bg-gray-50">

     

     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 -ml-10">Product Categories</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.
        </p>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 justify-items-center">
        

        <div className="bg-white rounded-xl shadow-md p-6 w-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <i className="fa-solid fa-laptop text-5xl text-black mb-4"></i>
          <p className="text-lg font-semibold text-gray-700">Electronics</p>
        </div>

   
        <div className="bg-white rounded-xl shadow-md p-6 w-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <i className="fa-solid fa-gem text-5xl text-black mb-4"></i>
          <p className="text-lg font-semibold text-gray-700">Jewelery</p>
        </div>

      
        <div className="bg-white rounded-xl shadow-md p-6 w-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <i className="fa-solid fa-person text-5xl text-black mb-4"></i>
          <p className="text-lg font-semibold text-gray-700">Men's Clothing</p>
        </div>

    
        <div className="bg-white rounded-xl shadow-md p-6 w-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <i className="fa-solid fa-person-dress text-5xl text-black mb-4"></i>
          <p className="text-lg font-semibold text-gray-700">Women's Clothing</p>
        </div>

      </div>
    </section>
  );
};

export default Categories;
