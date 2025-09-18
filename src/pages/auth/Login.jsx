import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/login.css";
import { toast } from 'react-toastify';

const Login = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   })



   const validateForm = () => {
      if (formData.email && formData.password) {
         toast.success("working")
      }
      else {
         toast.dark("Not working")
      }
   }




   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value
      }))
   }


   return (
      <div className="login-container">
         <div className="login-card">
            <h2 className="login-title">Welcome Back!</h2>
            <div className="login-form">
               <div>
                  <label className="login-label" htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                     <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="login-input"
                        placeholder="you@example.com"
                     />
                  </div>
               </div>

               <div>
                  <label className="login-label" htmlFor="password">Password</label>
                  <div className="input-wrapper">
                     <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="login-input"
                        placeholder="Enter your password"
                     />
                  </div>
               </div>

               <div className="login-options">
                  <div className="remember-me">
                     <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="checkbox"
                     />
                     <label htmlFor="remember-me" className="remember-label">
                        Remember me
                     </label>
                  </div>

                  <div className="forgot-password">
                     <h4
                        onClick={() => navigate("/signup")}
                        className="forgot-link">
                        Forgot your password?
                     </h4>
                  </div>
               </div>

               <div>
                  <button
                     onClick={validateForm}
                     className="login-button"
                  >
                     Login
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
