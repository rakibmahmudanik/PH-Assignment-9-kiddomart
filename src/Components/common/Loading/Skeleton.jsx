import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="skeleton h-44 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-40"></div>
      <div className="flex justify-between">
        <div>
          {/* <div className="skeleton h-2 w-20 mb-2"></div> */}
          <div className="skeleton h-6 w-20"></div>
        </div>
        <div>
          {/* <div className="skeleton h-2 w-20 mb-2"></div> */}
          <div className="skeleton h-6 w-20"></div>
        </div>
      </div>
      <div className="skeleton h-10 w-full"></div>
    </div>
  );
};

export default Skeleton;
