import React from "react";
import Rating from "../../../common/Rating/Rating";
import { PiFireFill } from "react-icons/pi";

const FeaturedToyCard = ({ toy }) => {
  const { pictureURL, toyName, rating, availableQuantity, price } = toy;

  return (
    <div className="card h-70 bg-base-100 shadow-md border border-base-200">
      <figure className="relative h-64 md:h-52 lg:h-44 overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-full object-cover"
        />
        <span className="badge bg-gray-100 absolute top-2 left-2 text-xs font-semibold">
          <PiFireFill className="text-[#ffaa22]" size={17} />
          Popular
        </span>
      </figure>

      <div className="card-body p-5 gap-3">
        <h2 className="card-title text-base font-medium">{toyName}</h2>

        <Rating rating={rating}></Rating>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-base-content/50">Available</p>
            <p className="text-sm font-medium">{availableQuantity} units</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-base-content/50">Price</p>
            <p className="text-xl font-medium text-[#615fff]">${price}</p>
          </div>
        </div>

        {/* <div className="card-actions mt-1">
          <button className="btn bg-[#615fff] text-white btn-md w-full">
            View More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedToyCard;
