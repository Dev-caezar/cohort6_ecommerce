import React, { useState } from "react";
import "../../styles/signup.css"
// import { toast } from "react-toastify";
// import axios from "axios";




const Signup = () => {
   try {
      // let age = 8

      // console.log(age.toUpperCase());

      const [formData, setFormData] = useState({
         userName: "",
         email: "",
         password: "",
      })

      console.log(formData)


      // // const validateform = () => {
      // //    if (formData.username == "" || formData.email === "" || formData.password == "") {
      // //       toast.error("Please fill all details")
      // //    } else {
      // //       return true
      // //    }
      // //    console.log();

      // // }

      // // const API_BASE_URL = "https://typescript-auth-d8zb.onrender.com/api/users"

      // // const handleSubmit = async () => {
      // //    if (validateform()) {
      // //       // try {
      //       //    const response = await axios.post(`${API_BASE_URL}/signup`, formData,
      //       //       {
      //       //          headers: {
      //       //             "Content-Type": "application/json"
      //       //          }
      //       //       }
      //       // )
      //       console.log(age.toUpperCase());
      //       // console.log(response)

      //    }
      //    catch (error) {
      //       console.log(error)
      //    }

      // }



      return (
         <div className="signup-container">
            <div className="signup-card">
               <h2 className="signup-title">Create Your Account</h2>
               <div className="signup-form">
                  <div className="form-group">
                     <label htmlFor="username">Username</label>
                     <input
                        id="username"
                        name="userName"
                        type="text"
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: (e.target.value) })}
                        placeholder="Enter your username"
                     />
                  </div>

                  <div className="form-group">
                     <label htmlFor="email">Email Address</label>
                     <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: (e.target.value) })}
                        placeholder="you@example.com"
                     />
                  </div>

                  <div className="form-group">
                     <label htmlFor="password">Password</label>
                     <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: (e.target.value) })}
                        placeholder="Enter a strong password"
                     />
                  </div>

                  <button className="signup-button" onClick={() => { }}>
                     Sign Up
                  </button>
               </div>

               <div className="signin-text">
                  <p>
                     Already have an account?{" "}
                     <a href="#" className="signin-link">
                        Sign in
                     </a>
                  </p>
               </div>
            </div>
         </div>
      );
   } catch (err) {
      console.log(err)
   }
};

export default Signup;
