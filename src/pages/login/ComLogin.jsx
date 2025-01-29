import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ShieldCheck, Building } from "lucide-react";
import axios from "axios";
import Cookies from "js-cookie";

const ComLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8000/api/company/login", {
        email,
        password,
      });
      const { token } = response.data;
      
      Cookies.set("auth_token", token, { expires: 7 });
      
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
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
        {/* Left Side - Company Branding */}
        <div className="w-1/2 bg-gradient-to-br from-orange-400 to-red-600 relative overflow-hidden flex items-center justify-center p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Building className="w-24 h-24 text-white mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-center text-white">
              Welcome to Company Portal
            </h1>
            <p className="text-center text-white opacity-80 mt-2">
              Sign in to manage your company profile and listings
            </p>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Company Sign In
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

          <form onSubmit={handleLogin}>
            <div className="mb-4 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Company Email Address"
                required
              />
            </div>

            <div className="mb-4 relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
            </div>

            <div className="text-lg py-5 flex justify-between">
              <div>
                <span>Don&apos;t have an account? </span>
                <Link className="text-orange-600 font-bold" to="/comRegistration">
                  Register Now!
                </Link>
              </div>
              {/* <div>
                <Link className="text-orange-600 font-bold" to="/forgot-password">
                  Forgot password?
                </Link>
              </div> */}
            </div>

            <motion.button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md font-medium hover:bg-orange-700 transition-colors"
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

export default ComLogin;