import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { GiShoppingCart } from "react-icons/gi";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const MyCart = () => {
  useDocumentTitle("My Cart");
  const { cartItems, setCartItems } = useContext(AuthContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.toyId !== id));
  };

  return (
    <div className="min-h-screen bg-base-200 py-6 md:py-10 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-700 flex justify-between  items-center gap-2">
          <div>
            Your <span className="text-[#615fff]">Cart</span>
          </div>
          <Link
            to={"/"}
            className="text-sm md:text-lg underline hover:text-[#615fff] transition-colors"
          >
            Go to Home
          </Link>
        </h2>

        {cartItems?.length > 0 ? (
          <div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-[#615fff] border-b">
                    <th className="bg-transparent">Product</th>
                    <th className="bg-transparent">Quantity</th>
                    <th className="bg-transparent">Price</th>
                    <th className="bg-transparent">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.toyId}
                      className="bg-gray-50 md:bg-transparent"
                    >
                      <td className="rounded-l-xl">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.pictureURL}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
                            alt={item.toyName}
                          />
                          <span className="font-bold text-xs md:text-base line-clamp-1">
                            {item.toyName}
                          </span>
                        </div>
                      </td>
                      <td className="text-xs md:text-base">{item.quantity}</td>
                      <td className="font-bold text-xs md:text-base">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="rounded-r-xl">
                        <button
                          onClick={() => removeItem(item.toyId)}
                          className="btn btn-ghost btn-xs text-red-500 hover:bg-red-50 transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-lg md:text-xl font-bold">
                Total Price:{" "}
                <span className="text-[#615fff]">
                  ${totalPrice?.toFixed(2)}
                </span>
              </h3>
              <button className="btn bg-[#615fff] text-white hover:bg-indigo-700 w-full md:w-auto px-10 rounded-full border-none">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl flex justify-center text-gray-600 mb-3">
              <GiShoppingCart />
            </div>
            <p className="text-gray-500 text-lg md:text-xl">
              Your cart is empty!
            </p>
            <Link
              to="/alltoys"
              className="btn btn-sm btn-outline mt-4 border-[#615fff] text-[#615fff]"
            >
              Browse Toys
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
