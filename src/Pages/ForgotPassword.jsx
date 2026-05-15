import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Components/common/Loading/Spinner";

const ForgotPassword = () => {
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState(location.state?.forgotEmail || "");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonColor: "#615fff",
      });
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Email Sent!",
          text: "A password reset link has been sent to your email. Check your spam mail if you don't see email. \nRedirecting to Gmail...",
          icon: "success",
          confirmButtonColor: "#615fff",
        }).then(() => {
          window.location.href = "https://mail.google.com";
        });
      })
      .catch((error) => {
        console.error("Reset Error:", error);
        Swal.fire({
          title: "Failed!",
          text: error.message || "Something went wrong.",
          icon: "error",
          confirmButtonColor: "#ff5f5f",
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-300px)] flex justify-center items-center py-10 px-5 bg-base-200 ">
      <div className="card w-full max-w-md bg-white shadow-xl border border-gray-100 p-6 animate-fadeInLeft">
        <h2 className="text-3xl font-black text-center text-gray-700 mb-2">
          Reset <span className="text-[#615fff]">Password</span>
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-600 mb-2">
                Email Address
              </span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="input input-bordered w-full focus:outline-none focus:border-[#615fff]"
              required
            />
          </div>

          <div className="form-control pt-2">
            <button
              type="submit"
              className="btn bg-[#615fff] hover:bg-indigo-700 text-white border-none w-full font-bold"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
