import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import img from '.././../assets/threeD.svg';
const Login = () => {

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-6 ">

      {/* Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-xl flex overflow-hidden mb-20">

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 text-white">

          <h2 className="text-4xl font-bold mb-3">Welcome Back!</h2>
          <p className="mb-8 text-gray-200">Login to your account</p>

          {/* Email */}
          <div className="flex items-center bg-white/20 rounded-full px-4 py-3 mb-5">
            <FaUser className="mr-3 text-gray-200" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none w-full text-white placeholder-gray-200"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white/20 rounded-full px-4 py-3 mb-5">
            <FaLock className="mr-3 text-gray-200" />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full text-white placeholder-gray-200"
            />
          </div>

          <button onClick={()=>{
            alert("WelCome To User")
          }} className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
            Login
          </button>

          <p className="mt-6 text-sm text-gray-200">
            Don't have an account?{" "}
            <span className="underline cursor-pointer">Sign Up</span>
          </p>
        </div>

        {/* Right Side - 3D Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-white/5">
          <img
            src={img}
            alt="3D Illustration"
            className="w-4/5 animate-bounce-slow"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;