import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [photoErr, setPhotoErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 6) {
      setNameErr("Name should be more than 6 letters");
      return;
    } else {
      setNameErr("");
    }
    const profilePhoto = form.profilePhoto.value;
    if (profilePhoto.slice(0, 8) !== "https://") {
      setPhotoErr("Invalid URL ! Please try again.");
      return;
    } else {
      setPhotoErr("");
    }
    const email = form.email.value;
    const pass = form.password.value;
    const isValid =
      /[A-Z]/.test(pass) && /[a-z]/.test(pass) && pass.length >= 6;
    if (!isValid) {
      setPassErr(
        "Password must be 6 characters or more.\nAtlest One Uppercase, One Lowercase",
      );
      return;
    } else {
      setPassErr("");
    }

    createUser(email, pass)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: profilePhoto })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: profilePhoto });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        Swal.fire({
          title: "Good job!",
          text: "Account Register Successfull",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErr("Email Already in use !");
      });
  };
  return (
    <main
      className={`relative min-h-screen w-full flex items-center justify-center bg-[url("https://i.ibb.co.com/2HRGNRZ/regimage.webp")] bg-cover bg-center bg-blend-overlay py-7`}
    >
      <div className=" absolute inset-0 bg-black/80" />

      <div className="py-4 px-4 md:px-8 z-10">
        <div className="animate-fadeInLeft border bg-white border-slate-300 rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0 ">
          <div className="mb-8">
            <h1 className="text-slate-900 text-3xl font-bold mb-4">Sign Up</h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Sign Up to your account to see the product details.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#615fff]"
              />

              {nameErr && (
                <p className="text-red-600 text-xs mt-2">{nameErr}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="profilePhoto"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="profilePhoto"
                name="profilePhoto"
                placeholder="Paste your photo url"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#615fff]"
              />
              {photoErr && (
                <p className="text-red-600 text-xs mt-2">{photoErr}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="info@example.com"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#615fff]"
              />
              {err && <p className="text-red-600 text-xs mt-2">{err}</p>}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Password
              </label>
              <input
                type={`${isShow ? "text" : "password"}`}
                id="password"
                name="password"
                placeholder="••••••••"
                required
                className=" px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#615fff]"
              />
              <div
                onClick={() => {
                  setIsShow(!isShow);
                }}
                className=" absolute top-11 right-3 opacity-50 hover:opacity-100 cursor-pointer duration-300"
              >
                {isShow ? <FaEye /> : <FaEyeSlash />}
              </div>

              {passErr && (
                <p className="text-red-600 text-xs mt-2">{passErr}</p>
              )}
            </div>

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="sr-only"
                />
                {/* Custom box */}
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-[#615fff] group-has-[input:checked]:outline-[#615fff] group-focus-within:outline-2 group-focus-within:outline-[#615fff]"
                  aria-hidden="true"
                >
                  {/* Checkmark */}
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700">Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-[#615fff] bg-[#615fff] hover:bg-[#4947db] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7977ff]"
            >
              Register
            </button>

            <div className="flex items-center gap-4">
              <hr className="w-full border-slate-300" />
              <p className="text-sm text-slate-700 text-center">or</p>
              <hr className="w-full border-slate-300" />
            </div>

            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7673ff]"
              >
                <FcGoogle size={20} />
                Sign in with Google
              </a>
            </div>

            <div className="text-slate-900 text-sm text-center">
              Already have an account?{" "}
              <Link
                to={"/auth/login"}
                className="text-[#615fff] hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7f7dff] rounded"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
