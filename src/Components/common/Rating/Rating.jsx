import React, { useId } from "react";

const Rating = ({ rating }) => {
  const uid = useId();
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill =
          i <= Math.floor(rating)
            ? "100%"
            : i === Math.ceil(rating)
              ? `${(rating % 1) * 100}%`
              : "0%";

        console.log("Rating -", rating, "Ceil", Math.ceil(rating));
        const gradId = `grad-${uid}-${i}`;

        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <defs>
              <linearGradient id={gradId}>
                <stop offset={fill} stopColor="#ffaa22" />
                <stop offset={fill} stopColor="#ffaa224e" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={`url(#${gradId})`}
              strokeWidth="1.5"
            />
          </svg>
        );
      })}
      <span className="text-sm text-base-content/50 ml-1">{rating} / 5</span>
    </div>
  );
};

export default Rating;
