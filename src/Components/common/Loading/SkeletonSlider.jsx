import React from "react";

const SkeletonSlider = () => {
  return (
    <div className=" lg:h-screen flex flex-col-reverse lg:flex-row lg:justify-between items-center  p-6 md:px-16 lg:px-24 xl:px-32 gap-5">
      <div className=" space-y-5 lg:space-y-8 ">
        <div className=" skeleton mx-auto w-120 h-10 lg:w-170  lg:h-10"></div>
        <div className=" skeleton mx-auto w-155 h-20  lg:w-170  lg:h-40"></div>
        <div className=" skeleton mx-auto w-40 h-10 lg:mx-0 lg:w-30  lg:h-10"></div>
      </div>
      <div className=" skeleton w-30 h-30  lg:w-100 lg:h-100 object-cover  mask mask-hexagon" />
    </div>
  );
};

export default SkeletonSlider;
