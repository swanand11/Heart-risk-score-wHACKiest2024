import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { useTheme } from "../../Themecontext"; // Importing the theme context

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme(); // Accessing the theme

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={`flex items-center justify-center h-screen ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-100"
        }`}
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
      >
        <motion.div
          className={`w-full max-w-md rounded-lg shadow-lg ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            <motion.h1
              className={`mb-6 text-2xl font-light text-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Welcome Back
            </motion.h1>

            <motion.form
              onSubmit={handleLogin}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-bold ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 border-gray-600 focus:ring-gray-500"
                      : "bg-white text-black border-gray-300 focus:ring-gray-800"
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className={`block mb-2 text-sm font-bold ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2 font-bold border rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 border-gray-600 focus:ring-gray-500"
                      : "bg-white text-black border-gray-300 focus:ring-gray-800"
                  }`}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <p
                  className={`mb-4 text-sm ${
                    theme === "dark" ? "text-red-400" : "text-red-500"
                  }`}
                >
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                className={`w-full px-4 py-2 font-bold rounded-md focus:outline-none focus:ring-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white focus:ring-gray-500 hover:bg-gray-600"
                    : "bg-black text-white focus:ring-gray-700 hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </motion.button>
            </motion.form>

            <div className="flex items-center justify-center my-6">
              <span
                className={`px-4 text-sm font-bold ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                or
              </span>
            </div>

            <motion.button
              onClick={handleGoogleLogin}
              className={`w-full px-4 py-2 font-bold rounded-md focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-red-600 text-white focus:ring-red-500 hover:bg-red-500"
                  : "bg-red-500 text-white focus:ring-red-400 hover:bg-red-600"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login with Google"}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p
                className={`mb-4 text-sm font-bold ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Don't have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-blue-500 hover:underline"
                >
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
