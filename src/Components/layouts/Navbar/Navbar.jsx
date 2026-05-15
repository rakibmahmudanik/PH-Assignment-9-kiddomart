import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./navbar.css";
import Search from "../../common/Search/Search";
import { AuthContext } from "../../../Provider/AuthProvider";
import Spinner from "../../common/Loading/Spinner";
import Swal from "sweetalert2";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const { user, logOut, isloading, cartItems } = useContext(AuthContext);
  if (isloading) return <div className="h-20"></div>;

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Account Logged Out!",
          icon: "warning",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className=" flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all z-50 animate-fadeInDown">
      <Link to={"/"} className="flex items-center gap-2">
        <div className="bg-[#615fff] p-2 rounded-lg rotate-3">
          <span className="text-2xl font-black text-white">KM</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight uppercase text-gray-600">
          Kiddo<span className="text-[#615fff]">Mart</span>
        </h2>
      </Link>

      <div className="hidden md:flex">
        {loc.pathname === "/alltoys" ? <Search></Search> : ""}
      </div>

      {/* Desktop Menu */}
      <div className="hidden sticky lg:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>

        <Link to={"/my-cart"} className="relative cursor-pointer">
          <HiOutlineShoppingCart className="w-6 h-6 text-[#615fff]" />

          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#615fff] w-[18px] h-[18px] rounded-full">
            {cartItems.length}
          </button>
        </Link>

        {user ? (
          <div className="flex justify-center items-center gap-3">
            <div
              className="tooltip  lg:tooltip-right"
              data-tip={`${user?.displayName}`}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={`${user?.photoURL}`}
              />
            </div>
            <button
              onClick={handleLogout}
              className="cursor-pointer px-5 text-sm py-2 bg-[#ff5f5f] hover:bg-[#cd3434]  text-white rounded-full transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="cursor-pointer px-8 py-2 bg-[#615fff] hover:bg-indigo-600  text-white rounded-full transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>

      <div className="flex justify-center items-center gap-3 lg:hidden">
        <Link to={"/my-cart"} className="relative cursor-pointer mr-5">
          <HiOutlineShoppingCart className="w-7 h-7 text-[#615fff]" />

          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#615fff] w-[18px] h-[18px] rounded-full">
            {cartItems.length}
          </button>
        </Link>
        {user && (
          <div
            className="tooltip tooltip-left"
            data-tip={`${user?.displayName}`}
          >
            <img className="w-10 h-10 rounded-full" src={`${user?.photoURL}`} />
          </div>
        )}
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="flex  z-20 cursor-pointer"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-20 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm lg:hidden transition-all z-500 animate-fadeInDown`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        {user ? (
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={handleLogout}
              className="cursor-pointer px-8 py-2 bg-[#ff5f5f] hover:bg-[#cd3434]  text-white rounded-full transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="cursor-pointer px-6 py-2 mt-2 bg-[#615fff] hover:bg-indigo-600 transition text-white rounded-full text-sm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
