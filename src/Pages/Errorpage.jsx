import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaGamepad } from "react-icons/fa";

const Errorpage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Visual Section */}
      <div className="relative mb-8 animate-bounce">
        {/* Large 404 Text */}
        <h1 className="text-[120px] md:text-[200px] font-black text-gray-100 leading-none tracking-tighter">
          404
        </h1>

        {/* Icon Floating Over Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaGamepad className="text-[#615fff] text-8xl md:text-[140px] opacity-90" />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-xl space-y-6">
        <span className="badge border-[#615fff] text-[#615fff] badge-outline font-bold uppercase tracking-widest px-4 py-3">
          Error: Toy Not Found
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Oops! This shelf is <span className="text-[#615fff]">empty.</span>
        </h2>

        <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
          The page you’re looking for has wandered off to another playroom.
          Let's get you back to the main shop!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full max-w-md justify-center z-100">
        <Link
          to="/"
          className="btn bg-[#615fff] hover:bg-[#4e4cd9] border-none text-white btn-lg rounded-2xl gap-2 text-lg flex-1 shadow-lg shadow-[#615fff]/20 transition-all active:scale-95"
        >
          <FaHome size={20} />
          Back Home
        </Link>

        <Link
          to="/alltoys"
          className="btn  bg-white border-[#615fff] text-[#615fff] hover:bg-[#615fff] hover:border-[#615fff] hover:text-white btn-lg rounded-2xl gap-2 text-lg flex-1 transition-all active:scale-95"
        >
          <FaSearch size={18} />
          All Toys
        </Link>
      </div>

      {/* Background Subtle Element */}
      <div className="fixed bottom-10 opacity-10">
        <p className="text-4xl font-black text-[#615fff] uppercase tracking-[1em]">
          Kiddo Mart
        </p>
      </div>
    </div>
  );
};

export default Errorpage;
