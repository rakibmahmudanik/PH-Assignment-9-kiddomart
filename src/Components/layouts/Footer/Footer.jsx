import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Newsletter Section */}
        <div className="space-y-6">
          <Link to={"/"} className="flex items-center gap-2">
            <div className="bg-[#615fff] p-2 rounded-lg rotate-3">
              <span className="text-2xl font-black text-white">KM</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase text-white">
              Kiddo<span className="text-[#615fff]">Mart</span>
            </h2>
          </Link>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Subscribe Now</h4>
            <p className="text-sm text-gray-400 font-medium">
              Don't miss out on new toy arrivals and exclusive deals!
            </p>
            <div className="join w-full">
              <input
                className="input input-bordered join-item w-full bg-transparent border-gray-700 text-white focus:outline-none focus:border-primary transition-all"
                placeholder="Email Address"
              />
              <button className="btn btn-primary join-item">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:ml-10">
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest border-l-4 border-primary pl-3">
            Explore
          </h4>
          <ul className="space-y-3 font-medium">
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Browse All Toys
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Educational Toys
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Outdoor Play
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Best Sellers
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest border-l-4 border-primary pl-3">
            Parent Corner
          </h4>
          <ul className="space-y-3 font-medium">
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Track Your Order
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Shipping Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Returns & Refund
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest border-l-4 border-primary pl-3">
            Contact
          </h4>
          <div className="space-y-4 font-medium text-sm">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>hello@kiddomart.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span>
                Toy Street, Dhaka <br /> Bangladesh
              </span>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-2 opacity-80">
              <div className="bg-transparent px-3 py-1 rounded border border-gray-800 text-[10px] font-bold text-white tracking-tighter">
                VISA
              </div>
              <div className="bg-transparent px-3 py-1 rounded border border-gray-800 text-[10px] font-bold text-white tracking-tighter">
                BKASH
              </div>
              <div className="bg-transparent px-3 py-1 rounded border border-gray-800 text-[10px] font-bold text-white tracking-tighter">
                NAGAD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Icons with Primary Color Hover */}
        <div className="flex gap-4">
          <a className="btn btn-circle btn-sm btn-outline border-gray-500 text-gray-300 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
            <FaFacebookF />
          </a>
          <a className="btn btn-circle btn-sm btn-outline border-gray-500 text-gray-300 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
            <FaInstagram />
          </a>
          <a className="btn btn-circle btn-sm btn-outline border-gray-500 text-gray-300 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
            <FaTwitter />
          </a>
          <a className="btn btn-circle btn-sm btn-outline border-gray-500 text-gray-300 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
            <FaYoutube />
          </a>
        </div>

        <p className="font-medium text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">Kiddo Mart</span>. Made with{" "}
          <FaHeart className="text-[#615fff] inline mx-1 animate-pulse" /> for
          kids.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
