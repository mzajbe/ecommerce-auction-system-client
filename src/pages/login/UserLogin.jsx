import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import Card from "../../components/animationComponents/carComponents/Card";

const UserLogin = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error handling
  const [success, setSuccess] = useState(""); // State for success message
  const navigate = useNavigate(); // Use navigate to programmatically redirect after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    setSuccess("");

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      // Assuming your API returns the token in response.data.token
      const token = response.data.token;

      // Save the token in a cookie
      Cookies.set("auth_token", token, { expires: 1 }); // Cookie expires in 1 day

      // Show success message and redirect after 2 seconds
      setSuccess("Login successful! Redirecting to the dashboard...");
      setTimeout(() => {
        navigate("/"); // Redirect to the dashboard or homepage
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Invalid email or password."); // Show error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <motion.div
        className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden flex w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left Side - Car Animation */}
        <div className="w-1/2 bg-gradient-to-br from-orange-600 to-slate-700 relative overflow-hidden flex items-center justify-center p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card />
            <h1 className="text-3xl font-bold text-center text-white">Welcome Back to BidBlaze</h1>
            <p className="text-center text-white opacity-80 mt-2">
              Log in to explore amazing car auctions!
            </p>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Sign In to Your Account
          </h2>

          {success && (
            <motion.div
              className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ShieldCheck className="mr-2" />
              {success}
            </motion.div>
          )}

          {error && (
            <motion.div
              className="bg-red-100 text-red-800 px-4 py-2 rounded-md mb-4 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="mb-4 relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
            </div>

            <div className="text-lg py-5 flex justify-between">
              <div>
                <span>Don&apos;t have an account? </span>
                <Link className="text-blue-600 font-bold" to="/user-register">
                  Register Now!
                </Link>
              </div>
              
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-slate-600 to-orange-400 text-white py-2 px-4 rounded-md font-medium hover transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UserLogin;
