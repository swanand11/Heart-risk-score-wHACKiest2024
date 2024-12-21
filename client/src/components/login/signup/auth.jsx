import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "./../../footer/Footer";
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

export default function SignUp({}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");  // Manages the current theme
  const navigate = useNavigate();

  // Handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up successfully:", user);
      navigate("/login");  // Redirect to login page after successful signup
    } catch (err) {
      setError(err.message);  // Set error message if signup fails
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
          className="w-full max-w-md text-black bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            {/* Header */}
            <motion.h1
              className="mb-6 text-2xl font-light text-center text-black"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Create an Account
            </motion.h1>

            {/* Sign Up Form */}
            <motion.form
              onSubmit={handleSignUp}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 font-bold text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400"
                  placeholder="Choose a username"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 font-bold text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400"
                  placeholder="Create a password"
                  required
                />
              </div>

              {error && (
                <p className="mb-4 text-sm text-red-500">{error}</p>
              )}

              <motion.button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign Up
              </motion.button>
            </motion.form>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <span className="px-4 text-sm font-bold text-gray-500">or</span>
            </div>

            {/* Login Redirect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="mb-4 text-sm font-bold text-gray-700">
                Already have an account?{" "}
                <NavLink to="/login">Login</NavLink>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer theme={theme} />
    </>
  );
}