import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Rating from "../../../common/Rating/Rating";

const TestimonialCard = ({ data }) => {
  const { customerName, customerRole, rating, testimonial, customerImage } =
    data;
  return (
    <div className="card w-full max-w-xs md:max-w-md bg-base-200 shadow-sm border border-base-300 rounded-2xl transition-all">
      <div className="card-body p-6 gap-3">
        {/* Quote Icon */}
        <div className="text-[#615fff] opacity-80">
          <BiSolidQuoteAltLeft size="30" />
        </div>

        {/* Testimonial Text */}
        <p className="text-sm md:text-lg font-semibold leading-relaxed text-base-content tracking-tight opacity-70 italic ">
          {testimonial}
        </p>

        <div className="mb-3 opacity-50">
          <Rating rating={rating}></Rating>
        </div>

        {/* Attribution Section */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-6 md:w-10 rounded-full ring ring-[#615fff] ring-offset-base-100 ring-offset-2">
              <img src={customerImage} alt="Samantha Johnson" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs md:text-md leading-none">
              {customerName}
            </h4>
            <p className="text-[8px] md:text-xs opacity-60 mt-1">
              {customerRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
