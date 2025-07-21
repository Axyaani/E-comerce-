import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-gray-50 min-h-screen relative">
      
     

    
      <div className="flex-1 max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          The Device That<br />Takes You Higher.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing do eiusmod tempor incididunt ut labore et dolo aliqua. Ut enim ad minim veniam.
        </p>
        <button className="bg-black text-white px-8 py-4 font-semibold tracking-wide hover:bg-gray-800">
          VIEW COLLECTION
        </button>
      </div>

  
      <div className="flex-1 relative mt-12 lg:mt-0 flex flex-col items-center">
        <img
          src="https://html.themexplosion.com/goru/assets/images/home/1.jpg"
          alt="VR Device"
          className="rounded-lg shadow-lg object-cover w-full max-w-md"
        />
        <div className="absolute right-0 top-0 text-xl font-bold text-black">
          01
        </div>
        <div className="absolute right-0 bottom-0 text-xl font-bold text-black">
          04
        </div>
      </div>
    </section>
  );
};

export default Hero;
