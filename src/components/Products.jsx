import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {
   const [product, setProduct] = useState([])
   const navigate = useNavigate();

   const getProducts = async () => {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      try {
         setProduct(response.data);
         console.log(response.data);
      } catch (error) {
         console.log(error)
      }
   };
   useEffect(() => {
      getProducts();
   }, []);

   const handleAddToCart = (item) => {
      // Implement add to cart functionality
      console.log('Added to cart:', item);
   }

   return (
      <div className='w-full h-screen min-h-max bg-gray-200 flex flex-col items-center gap-[30px] pt-10'>
         <div className='w-[85%] h-[20%] flex  items-center justify-center'>
            <h2 className='text-[40px] font-bold'>Our Products</h2>
         </div>
         <div className='w-full h-full flex justify-center items-center flex-wrap gap-10 pb-10'>
            {product.map((item) => (
               <div key={item?.id} className='w-[300px] h-[400px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4 hover:scale-105 duration-300'>
                  <div className='w-full h-[60%] flex justify-center items-center'>
                     <img src={item.images[0]} alt={item?.title} className='max-h-full object-contain' />
                  </div>
                  <div className='w-full h-[40%] flex flex-col justify-between items-start mt-4'>
                     <h4 className='text-[16px] font-semibold text-gray-800'>{item?.title}</h4>
                     <p className='text-[14px] text-gray-600'>${item?.price}</p>
                     <button
                        onClick={() => navigate(`/products/${item?.id}`)}
                        className='w-full bg-[#3734A9] text-white text-[14px] font-[500] px-5 py-3 rounded-lg hover:bg-opacity-80 duration-300 mt-2'>
                        Add to Cart
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Products
