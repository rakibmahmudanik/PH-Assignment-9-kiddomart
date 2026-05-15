import React, { useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const TryNowForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleTryNow = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Thanks! ${name}`,
      text: "Your request has been submitted successfully!",
      icon: "success",
      confirmButtonColor: "#615fff",
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="w-full max-w-2xl mx-auto my-10 p-6 bg-white rounded-2xl border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Try Now
      </h3>

      <form onSubmit={handleTryNow} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold mb-2">Name</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="input input-bordered w-full focus:outline-none focus:border-[#615fff]"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold mb-2">Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="input input-bordered w-full focus:outline-none focus:border-[#615fff]"
            required
          />
        </div>

        <div className="form-control pt-2">
          <button
            type="submit"
            className="btn bg-[#615fff] hover:bg-indigo-700 text-white border-none w-full font-bold"
          >
            Try Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default TryNowForm;
