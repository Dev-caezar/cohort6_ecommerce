import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
   const [product, setProduct] = useState([]);
   const [quantity, setQuantity] = useState(1);
   const { productId } = useParams();

   const fetchProduct = async () => {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
      try {
         setProduct(response.data);
         console.log(response.data);
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchProduct();
   }, [productId]);

   const handleIncrement = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
   }
   const handleDecreament = () => {
      setQuantity(prevQuantity => prevQuantity - 1);
   }

   return (
      <div className='w-full h-[90%] flex flex-col md:flex-row justify-center items-center'>
         <div className='bg-white w-[90%] md:w-[80%] h-full md:h-[75%] flex flex-col  md:flex-row gap-8 py-0 md:py-0'>
            <div className='relative w-full md:w-1/2 h-[35%] md:h-full flex flex-col items-center '>
               <div className='w-full md:w-[70%] h-[80%] md:h-full flex flex-col justify-between'>
                  <div className='w-full h-full md:h-auto rounded-none md:rounded-3xl overflow-hidden cursor-pointer'>
                     <img src={product?.images} alt="Main product" className='w-full h-full object-cover' />
                  </div>

               </div>
            </div>
            <div className='w-full md:w-1/2 h-full flex flex-col justify-start md:justify-center px-5'>
               <p className='text-blue-400 font-bold text-[20px] uppercase'>{product?.category?.name}</p>
               <h1 className='text-3xl lg:text-3xl font-bold mt-2'>{product?.title}</h1>
               <p className='text-gray-600 mt-4 leading-relaxed'>
                  {product?.description}
               </p>
               <div className='flex items-center justify-between md:justify-start gap-4 mt-6'>
                  <div className='flex items-center gap-4'>
                     <span className='text-2xl font-bold'>{product?.price}</span>
                     <span className='bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-md'>50%</span>
                  </div>
                  <p className='text-gray-400 line-through md:hidden'>$250.00</p>
               </div>
               <p className='hidden md:block text-gray-400 line-through mt-1'>$250.00</p>
               <div className='flex flex-col sm:flex-row gap-4 mt-8 items-center w-full'>
                  <div className='flex items-center bg-gray-200 rounded-md h-[50px] px-5 w-full sm:w-32 justify-between'>
                     <button
                        onClick={handleDecreament}
                        className='text-blue-400 text-xl font-bold'>-</button>
                     <span className='font-bold text-lg'>{quantity}</span>
                     <button
                        onClick={handleIncrement}
                        className='text-blue-400 text-xl font-bold'>+</button>
                  </div>
                  <button
                     className='w-full md:w-[300px] h-[50px] flex items-center justify-center gap-2 bg-blue-400 text-white font-bold rounded-md shadow-lg hover:bg-orange-600 transition-colors'
                  >
                     <IoCartOutline className='text-xl font-extrabold' />
                     Add to cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetail;
