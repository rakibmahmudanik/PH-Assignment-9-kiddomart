import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const Myprofile = () => {
  useDocumentTitle("My Profile");
  const { user, setUser, updateUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!user) return;

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        Swal.fire({
          title: "User Updated!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to update profile.");
      });
  };

  return (
    <div className="min-h-[calc(100vh-300px)] flex justify-center items-center py-10 px-5 bg-base-200">
      <div className="card w-full max-w-lg bg-white shadow-xl border border-gray-200">
        <div className="flex flex-col items-center pt-8">
          <div className="avatar">
            <div className="w-28 rounded-full ring-3 ring-[#615fff] ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User Profile"
              />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user?.displayName || "No Name Set"}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <form onSubmit={handleUpdate} className="card-body gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mr-2">Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered focus:border-[#615fff]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mr-2">Photo URL</span>
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter photo link"
              className="input input-bordered focus:border-[#615fff]"
              required
            />
          </div>

          <div className="form-control mt-4">
            <button className="btn bg-[#615fff] hover:bg-indigo-700 text-white border-none rounded-lg transition-all duration-300">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Myprofile;
