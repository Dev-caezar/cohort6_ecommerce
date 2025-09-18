import React, { useContext, useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import logo from "../assets/public/logo.svg";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../utils/AppContext';

const Header = () => {
   const navItems = ["Home", "Contact", "About"];
   const [showCart, setShowCart] = useState(false);
   const { cart } = useContext(AppContext)
   console.log(cart)


   const navigate = useNavigate();

   return (
      <div className='sticky top-0 w-full h-[18%] bg-blue-400 flex items-center justify-center z-50'>
         <div className='w-[85%] h-full border-b-1 border-[#fff] flex items-center justify-between'>
            <div className='w-[20%] h-full flex items-center gap-[10px]'>
               <div className='w-[50px] h-[50px] rounded-full'>
                  <img src={logo} alt="FashionForAll Logo" className='w-full h-full object-contain' />
               </div>
               <h4 className='text-[20px] text-[#3734A9] font-bold'>FashionForAll</h4>
            </div>
            <div className='w-[40%] h-full flex justify-around items-center'>
               {navItems.map((item, index) => (
                  <h4 key={index} className='text-[16px] text-black font-[500] cursor-pointer hover:text-[#3734A9] duration-300'>{item}</h4>
               ))}
            </div>
            <div className='w-[20%] h-full flex justify-between items-center gap-[20px]'>
               <IoSearchOutline className='text-black text-[25px] cursor-pointer hover:text-[#3734A9] duration-300' />

               <div className='relative cursor-pointer' onClick={() => setShowCart(!showCart)}>
                  <IoIosCart className='text-black text-[30px] hover:text-[#3734A9] duration-300' />
                  <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center'>
                     {cart.length}
                  </span>
               </div>

               <button
                  onClick={() => navigate('/login')}
                  className='bg-[#3734A9] text-white text-[14px] font-[500] px-5 py-3 rounded-lg hover:bg-opacity-80 duration-300'>
                  Get Started
               </button>
            </div>
         </div>

         {showCart && (
            <div className='absolute top-full right-[5%] mt-2 w-72 bg-white rounded-lg shadow-lg z-100 p-4'>
               <h5 className='font-bold text-lg mb-2'>Your Cart</h5>
               {/* {cart.length > 0 ? (
                  <ul>
                     {cart.map(item => (
                        <li key={item.id} className='flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0'>
                           <span>{item.slug} x {item.quantity}</span>
                           <span>${item.price}</span>
                        </li>
                     ))}
                  </ul>
               ) : (
                  <p className='text-gray-500'>Your cart is empty.</p>
               )} */}
            </div>
         )}
      </div>
   );
};

export default Header;
