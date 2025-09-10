import React from 'react';
import men from "../assets/public/men.jpg"
import women from "../assets/public/women.jpg"

const Hero = () => {
   return (
      <div className="w-full bg-blue-400 py-16 px-4">
         <div className="max-w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
               <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#38A756]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                     </svg>
                     <p className="text-gray-700 font-semibold">Free Register</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#38A756]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                     </svg>
                     <p className="text-gray-700 font-semibold">Great Service</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#38A756]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                     </svg>
                     <p className="text-gray-700 font-semibold">Easy payment</p>
                  </div>
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Getting the best and latest style has never
                  <br />
                  <span className="text-[#3734A9]">been easier!</span>
               </h1>
               <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
                  FashionForAll is a platform that helps to make fashion
                  accessible to all. It brings fashion to your doorstep!
               </p>
               <div className="flex items-center justify-center lg:justify-start gap-6">
                  <button className="bg-[#3734A9] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">
                     Shop collections
                  </button>
                  <a href="#" className="flex items-center gap-2 text-[#3734A9] font-semibold">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.004-1.229a.75.75 0 0 0-1.061 0L12 13.189l-3.193-3.193a.75.75 0 1 0-1.061 1.06l3.236 3.236a.75.75 0 0 0 1.061 0l3.236-3.236a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                     </svg>
                     Watch reviews
                  </a>
               </div>
            </div>

            <div className="lg:w-1/2 w-full relative h-[400px] md:h-[500px] flex justify-end items-center">
               <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-transparent border-4 border-white shadow-2xl overflow-hidden relative ">
                  <img
                     src={women}
                     alt="Woman in colorful dress"
                     className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute top-1/2 left-6 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden -translate-y-1/2 -translate-x-1/2 border-4 border-white shadow-lg">
                  <img
                     src={men}
                     alt="Man in patterned suit"
                     className="w-full h-full object-cover"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
