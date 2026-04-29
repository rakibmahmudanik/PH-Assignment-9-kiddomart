import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useToyData from "../Hooks/useToyData";
import {
  Star,
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Mail,
  User,
} from "lucide-react";
import Spinner from "../Components/common/Loading/Spinner";

const ToyDetailsPage = () => {
  const { toyData, isloading } = useToyData();
  const [quantity, setQuantity] = useState(1);
  const idParams = useParams().id;

  if (isloading) return <Spinner></Spinner>;

  const toyDetails = toyData.filter(
    (toy) => toy.toyId.toString() === idParams,
  )[0];
  console.log(toyDetails);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-delay="100"
      data-aos-anchor-placement="top-center"
      className="min-h-screen bg-base-100 py-8 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-6 text-base-content/60">
        <ul>
          <li data-aos="fade-right" data-aos-delay="100">
            <Link to={"/"}>Home</Link>
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            <Link to="/alltoys">Shop</Link>
          </li>
          <li data-aos="fade-right" data-aos-delay="500">
            <Link>{toyDetails.subCategory}</Link>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="700"
            className="text-[#615fff] font-semibold"
          >
            {toyDetails.toyName}
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: toyDetails Image */}
        <div className="space-y-4">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-base-200 rounded-3xl overflow-hidden shadow-inner group"
          >
            <img
              src={toyDetails.pictureURL}
              alt={toyDetails.toyName}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Small Thumbnails (Placeholder) */}
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={toyDetails.pictureURL}
                alt={toyDetails.toyName}
                className="w-20 h-20 opacity-30 bg-base-200 rounded-xl border-2 border-transparent hover:border-primary hover:opacity-100 cursor-pointer transition-all duration-300"
              ></img>
            ))}
          </div>
        </div>

        {/* Right: toyDetails Info */}
        <div className="flex flex-col gap-6">
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="badge  badge-outline opacity-40 mb-2 font-bold uppercase tracking-wider"
            >
              {toyDetails.subCategory}
            </div>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-3xl md:text-5xl font-black leading-tight"
            >
              {toyDetails.toyName}
            </h1>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4 mt-4">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="flex items-center text-orange-400 font-bold gap-1"
              >
                <Star className="fill-current w-5 h-5" />
                <span>{toyDetails.rating}</span>
                <span className="text-base-content/40 font-medium">
                  ({toyDetails.totalReviews} Reviews)
                </span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="350"
                className="divider divider-horizontal"
              ></div>
              <span
                data-aos="fade-right"
                data-aos-delay="400"
                className={`font-bold ${toyDetails.availableQuantity > 0 ? "text-success" : "text-error"}`}
              >
                {toyDetails.availableQuantity > 0
                  ? `In Stock (${toyDetails.availableQuantity})`
                  : "Out of Stock"}
              </span>
            </div>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-2xl md:text-4xl font-bold text-[#615fff]"
          >
            ${toyDetails.price.toFixed(2) * quantity}
          </p>

          {/* Seller Info Card */}
          <div
            data-aos="fade-left"
            data-aos-delay="600"
            className="bg-base-200 p-4 rounded-2xl flex flex-wrap gap-4 items-center border border-base-300"
          >
            <div className="avatar placeholder">
              <div className="bg-[#615fff] flex justify-center items-center text-secondary-content rounded-full w-12">
                <User />
              </div>
            </div>
            <div>
              <p className="text-sm opacity-60">Sold by</p>
              <h4 className="font-bold ">{toyDetails.sellerName}</h4>
            </div>
            <a
              href={`mailto:${toyDetails.sellerEmail}`}
              className="btn btn-md btn-ghost gap-2 ml-auto"
            >
              <Mail size={18} /> Contact Seller
            </a>
          </div>

          {/* Actions */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-wrap gap-4 mt-4"
          >
            <div className="join border border-base-300 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="btn join-item btn-ghost"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="input join-item w-16 text-center font-bold"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="btn join-item btn-ghost"
              >
                +
              </button>
            </div>

            <button className="btn bg-[#615fff] hover:bg-[#413fd2] flex-1 text-white rounded-xl gap-2 text-lg">
              <ShoppingCart size={20} /> Add to Cart
            </button>

            <button className="btn btn-outline btn-square rounded-xl">
              <Heart />
            </button>
          </div>

          {/* Trust Badges */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-base-300"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-success w-6 h-6" />
              <span className="text-xs font-bold opacity-70">
                Child-Safe Materials
              </span>
            </div>
            <div className="flex items-center gap-3 md:pl-5">
              <Truck className="text-info w-6 h-6" />
              <span className="text-xs  font-bold opacity-70">
                Fast Delivery
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="text-warning w-6 h-6" />
              <span className="text-xs font-bold opacity-70">
                30-Day Returns
              </span>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="my-10 space-y-3">
        <h2 className="font-bold text-xl">Description</h2>
        <p className="text-base-content/70 leading-relaxed text-lg text-justify">
          {toyDetails.description}
        </p>
      </div>
    </div>
  );
};

export default ToyDetailsPage;
