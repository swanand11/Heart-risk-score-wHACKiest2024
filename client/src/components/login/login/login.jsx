import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import '../Login.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGMVJGLfitVXibd_8UHSgnUm-nCZKpBtE",
  authDomain: "hack4humanity-39483.firebaseapp.com",
  projectId: "hack4humanity-39483",
  storageBucket: "hack4humanity-39483.appspot.com",
  messagingSenderId: "1023437540393",
  appId: "1:1023437540393:web:96f8dc4376c45f9857e038",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");  // Manages the current theme
  const navigate = useNavigate();

  // Handle login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle login with Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      // Redirect or perform further actions
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={`flex items-center justify-center h-screen ${theme === "dark" ? "dark" : ""}`}
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
      >
        <motion.div
          className={`w-full max-w-md ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} rounded-lg shadow-lg`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            {/* Header */}
            <motion.h1
              className={`mb-6 text-2xl font-light text-center ${theme === "dark" ? "text-white" : "text-black"}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Welcome Back
            </motion.h1>

            {/* Login Form */}
            <motion.form
              onSubmit={handleLogin}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-${theme === "dark" ? "gray-400" : "gray-500"}`}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className={`block mb-2 text-sm font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2 font-bold text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-${theme === "dark" ? "gray-400" : "gray-500"}`}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <p className="mb-4 text-sm text-red-500">{error}</p>
              )}

              <motion.button
                type="submit"
                className={`w-full px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Login
              </motion.button>
            </motion.form>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <span className={`px-4 text-sm font-bold ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>or</span>
            </div>

            {/* Google Login Button */}
            <motion.button
              onClick={handleGoogleLogin}
              className={`w-full px-4 py-2 font-bold text-white ${theme === "dark" ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"} rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Login with Google
            </motion.button>

            {/* Sign Up Redirect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className={`mb-4 text-sm font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Don't have an account?{" "}
                <NavLink to="/signup" className="text-blue-500">
                  Signup
                </NavLink>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer theme={theme} />
    </>
  );
}
