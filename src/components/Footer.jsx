import React from 'react';

const Footer = () => {
   return (
      <footer className="w-full bg-[#E5F3FD] pt-16 pb-8 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
               {/* Logo and company description section */}
               <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-auto">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-12 h-12 bg-gray-400 rounded-full">
                        {/* Placeholder for the logo */}
                     </div>
                     <h4 className="text-xl font-bold text-[#3734A9]">FashionForAll</h4>
                  </div>
                  <p className="text-sm text-gray-600 text-center md:text-left max-w-xs mb-4">
                     FashionForAll. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat.
                  </p>
                  <p className="text-xs text-gray-500">© 2022 All rights reserved.</p>
               </div>

               {/* Navigation and legal links section */}
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto mb-8 md:mb-0">
                  <div>
                     <h5 className="font-semibold text-gray-800 mb-2">Explore</h5>
                     <ul>
                        <li className="text-sm text-gray-600 mb-1">Product</li>
                        <li className="text-sm text-gray-600 mb-1">Sell your product</li>
                        <li className="text-sm text-gray-600 mb-1">Pricing</li>
                        <li className="text-sm text-gray-600 mb-1">Reviews</li>
                     </ul>
                  </div>
                  <div>
                     <h5 className="font-semibold text-gray-800 mb-2">Legal</h5>
                     <ul>
                        <li className="text-sm text-gray-600 mb-1">Privacy policy</li>
                        <li className="text-sm text-gray-600 mb-1">Terms of service</li>
                        <li className="text-sm text-gray-600 mb-1">Help center</li>
                     </ul>
                  </div>
                  <div>
                     <h5 className="font-semibold text-gray-800 mb-2">Social Media</h5>
                     <div className="flex gap-4">
                        <a href="#" className="text-gray-600 hover:text-[#3734A9] transition-colors duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.779 1.624 4.931 4.85.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.152 3.225-1.679 4.77-4.931 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.252-.148-4.779-1.624-4.931-4.85-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.152-3.225 1.679-4.77 4.931-4.919 1.266-.058 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.685-.073 4.947s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.685.072 4.947.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.684.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.782-6.979-6.98-1.281-.059-1.685-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                           </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#3734A9] transition-colors duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.325 1.325 1.325h11.495v-9.294h-3.13v-3.626h3.13v-2.149c0-3.13 1.903-4.839 4.69-4.839 1.325 0 2.464.099 2.79.143v3.25l-1.921.001c-1.503 0-1.795.715-1.795 1.763v2.313h3.646l-.475 3.626h-3.171v9.293h6.111c.732 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z" />
                           </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#3734A9] transition-colors duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 16c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v4zm5.5 0c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v4zm4.844-9.356c.264.444.407.954.407 1.505 0 .55-.143 1.06-.407 1.505-.264.444-.664.843-1.144 1.143-.48.299-1.007.502-1.577.609-.57.106-1.171.16-1.77.16s-1.2-.054-1.77-.16c-.57-.107-1.097-.31-1.577-.609-.48-.3-.88-.7-1.144-1.143-.264-.445-.407-.955-.407-1.505 0-.55.143-1.06.407-1.505.264-.444.664-.843 1.144-1.143.48-.299 1.007-.502 1.577-.609.57-.106 1.171-.16 1.77-.16s1.2.054 1.77.16c.57.107 1.097.31 1.577.609.48.3.88.7 1.144 1.143zm-4.844 1.356c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
