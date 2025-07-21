import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";

const Shop = () => {
  return (
<div>
    <Header/>
        <div className="bg-gray-50 py-12 px-4 md:px-20 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Shop Our Products
      </h2>

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
          <p className="text-gray-500 line-through text-sm">$32.00</p>
          <p className="text-black font-semibold text-sm">$28.00</p>
        </div>
      </div>
    </div>
    <Footer/>
</div>
  );
};

export default Shop;
