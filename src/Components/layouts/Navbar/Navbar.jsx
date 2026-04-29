import React, { use, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./navbar.css";
import Search from "../../common/Search/Search";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { user } = use(AuthContext);
  return (
    <nav
      data-aos="fade-down"
      className="overflow-hidden "
      className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all z-40"
    >
      <Link to={"/"} className="flex items-center gap-2">
        <div className="bg-[#615fff] p-2 rounded-lg rotate-3">
          <span className="text-2xl font-black text-white">KM</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight uppercase text-gray-600">
          Kiddo<span className="text-[#615fff]">Mart</span>
        </h2>
      </Link>

      {loc.pathname === "/alltoys" ? <Search></Search> : ""}

      {/* Desktop Menu */}
      <div className="hidden sticky lg:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>

        <div className="relative cursor-pointer">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-[#615fff] w-[18px] h-[18px] rounded-full">
            0
          </button>
        </div>

        {user ? (
          <p>{user.name}</p>
        ) : (
          <Link
            to={"/auth/login"}
            className="cursor-pointer px-8 py-2 bg-[#615fff] hover:bg-indigo-600 transition text-white rounded-full"
          >
            Login
          </Link>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="flex lg:hidden z-10 cursor-pointer"
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
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm lg:hidden transition-all `}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        {user ? (
          <p>{user.name}</p>
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
