import React from "react";

const PopularProducts = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 lg:px-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Most Popular</h2>
        <div className="space-x-3 text-xl text-gray-500">
          <i className="fas fa-arrow-left hover:text-black cursor-pointer"></i>
          <i className="fas fa-arrow-right hover:text-black cursor-pointer"></i>
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-6 text-sm font-medium mb-10">
        <span className="text-black underline">All</span>
        <span className="text-gray-500 hover:text-black cursor-pointer">Smartphones</span>
        <span className="text-gray-500 hover:text-black cursor-pointer">Camera</span>
        <span className="text-gray-500 hover:text-black cursor-pointer">Gadgets</span>
        <span className="text-gray-500 hover:text-black cursor-pointer">Others</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Product 1 - SALE */}
        <div className="bg-white p-4 rounded-lg shadow relative">
          <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold">SALE</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-cLKUIfng58dyKtc9tlDQ_851m5GyFhUJw&s"
            alt="Gaming Headset"
            className="w-full h-48 object-contain"
          />
          <h3 className="mt-4 font-bold">Gaming Headset</h3>
          <p className="text-gray-500 line-through text-sm">$42.00</p>
          <p className="text-black font-semibold text-sm">$38.00</p>
        </div>

        {/* Product 2 - HOT */}
        <div className="bg-white p-4 rounded-lg shadow relative">
          <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">HOT</span>
          <img
            src="https://microless.com/cdn/products/54e5cdfa417d9f89b9b8c3a206d226e6-hi.jpg"
            alt="VR Headset"
            className="w-full h-48 object-contain"
          />
          <h3 className="mt-4 font-bold">VR Headset</h3>
          <p className="text-black font-semibold text-sm">$122.00</p>
        </div>

        {/* Product 3 - OUT OF STOCK */}
        <div className="bg-white p-4 rounded-lg shadow relative">
          <span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">OUT OF STOCK</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHcEKd3Nqr3Nm3_3hSezsH6Z4wtiriGK6TA&s"
            alt="Wireless Headphones"
            className="w-full h-48 object-contain"
          />
          <h3 className="mt-4 font-bold">Wireless Headphones</h3>
          <p className="text-black font-semibold text-sm">$28.00</p>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
