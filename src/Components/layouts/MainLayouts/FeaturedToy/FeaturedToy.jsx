import React from "react";
import useToyData from "../../../../Hooks/useToyData";
import Skeleton from "../../../common/Loading/Skeleton";
import Card from "../../../common/card/Card";
import { Link } from "react-router";

const FeaturedToy = () => {
  const { toyData, isloading } = useToyData();
  const trimd = toyData.slice(0, 8);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-4">
      <h1 className="mt-10 mb-2 text-3xl font-bold">Featured Toys</h1>
      <hr className="w-16 border-2 mb-10 border-[#615fff] rounded-2xl"></hr>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {isloading
          ? [...Array(8)].map((_, index) => <Skeleton key={index}></Skeleton>)
          : trimd.map((toy) => <Card key={toy.toyId} toy={toy}></Card>)}
      </div>

      <div className="card-actions my-10 ">
        <Link
          to="/alltoys"
          className="btn bg-[#615fff] text-white btn-md mx-auto "
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedToy;
