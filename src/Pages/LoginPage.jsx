import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <main
      className={`relative min-h-screen w-full flex items-center justify-center bg-[url("https://i.ibb.co.com/nqjk80fD/login-Image.webp")] bg-cover bg-center bg-blend-overlay`}
    >
      <div className=" absolute inset-0 bg-black/80" />

      <div className="py-4 px-4 md:px-8 z-10">
        <div className="border bg-white border-slate-300 rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0">
          <div className="mb-8">
            <h1 className="text-slate-900 text-3xl font-bold mb-4">Sign in</h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Welcome Back ! Sign in to your account to see the product details.
            </p>
          </div>

          <form className="space-y-6">
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
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#615fff]"
              />
            </div>

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  required
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

              <a
                href="#"
                className="ml-auto text-sm font-medium text-[#615fff] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#615fff] rounded"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-[#615fff] bg-[#615fff] hover:bg-[#4947db] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7977ff]"
            >
              Sign in
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
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-[#615fff] hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7f7dff] rounded"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
