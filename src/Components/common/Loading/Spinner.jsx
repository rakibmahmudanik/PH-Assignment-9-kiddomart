import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <span className=" w-15 min-h-screen loading loading-spinner text-primary"></span>
    </div>
  );
};

export default Spinner;
