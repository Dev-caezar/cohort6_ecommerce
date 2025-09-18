import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/product.css";

const Products = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [modalOpen, setModalOpen] = useState(false);
   const [newProduct, setNewProduct] = useState({
      title: "",
      price: "",
      description: "",
      categoryId: "",
      imageURL: ""
   });

   const navigate = useNavigate();

   // Fetch products
   const getProducts = async () => {
      try {
         const response = await axios.get("https://api.escuelajs.co/api/v1/products");
         setProducts(response.data);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   useEffect(() => {
      getProducts();
   }, []);

   // Handle input change
   const handleChange = (e) => {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
   };

   // Submit new product
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const payload = {
            title: newProduct.title,
            price: Number(newProduct.price),
            description: newProduct.description,
            categoryId: Number(newProduct.categoryId),
            images: [newProduct.imageURL] // Must be array
         };

         const response = await axios.post(
            "https://api.escuelajs.co/api/v1/products",
            payload
         );
         console.log("Product created:", response.data);
         setModalOpen(false);
         getProducts(); // Refresh products
         setNewProduct({ title: "", price: "", description: "", categoryId: "", imageURL: "" });
      } catch (error) {
         console.log("Error creating product:", error.response || error);
         alert("Failed to create product. Check console for details.");
      }
   };

   return (
      <div className="products-page">
         <div className="products-header">
            <h2>Our Products</h2>
         </div>

         <div className="products-grid">
            {/* Create Product Card */}
            <div className="create-product-card" onClick={() => setModalOpen(true)}>
               + Add Product
            </div>

            {loading
               ? Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="skeleton-card animate-pulse">
                     <div className="skeleton-image"></div>
                     <div className="skeleton-info">
                        <div className="line title"></div>
                        <div className="line price"></div>
                        <div className="line button"></div>
                     </div>
                  </div>
               ))
               : products.map((item) => (
                  <div key={item.id} className="product-card">
                     <div className="product-image">
                        <img src={item.images[0]} alt={item.title} />
                     </div>
                     <div className="product-info">
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                        <button className="add-to-cart-btn">Add To Cart</button>
                     </div>
                     <div className="view-details-overlay">
                        <button
                           onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/products/${item.id}`);
                           }}
                        >
                           View Details
                        </button>
                     </div>
                  </div>
               ))}
         </div>

         {/* Modal */}
         {modalOpen && (
            <div className="modal-overlay" onClick={() => setModalOpen(false)}>
               <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <h3>Add New Product</h3>
                  <form onSubmit={handleSubmit}>
                     <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newProduct.title}
                        onChange={handleChange}
                        required
                     />
                     <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleChange}
                        required
                     />
                     <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleChange}
                        required
                     />
                     <input
                        type="number"
                        placeholder="Category ID (1-5)"
                        name="categoryId"
                        value={newProduct.categoryId}
                        onChange={handleChange}
                        required
                     />
                     <input
                        type="text"
                        placeholder="Image URL"
                        name="imageURL"
                        value={newProduct.imageURL}
                        onChange={handleChange}
                        required
                     />

                     <div className="modal-buttons">
                        <button
                           type="button"
                           className="cancel-btn"
                           onClick={() => setModalOpen(false)}
                        >
                           Cancel
                        </button>
                        <button type="submit" className="submit-btn">
                           Create
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
};

export default Products;
