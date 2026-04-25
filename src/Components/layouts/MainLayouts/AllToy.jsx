import React from "react";
import Card from "../../common/card/Card";
import useToyData from "../../../Hooks/useToyData";
import Skeleton from "../../common/Loading/Skeleton";
import { useSearchParams } from "react-router";

const AllToy = () => {
  const { toyData, isloading } = useToyData();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const filteredToy = toyData.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-4">
      <h1 className="mt-5 mb-2 text-3xl font-bold">
        All Toys{" "}
        <span className="text-sm text-gray-400">({filteredToy.length})</span>
        <hr className="w-16 border-2 mt-4 mb-10 border-[#615fff] rounded-2xl"></hr>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {isloading
          ? [...Array(20)].map((_, index) => <Skeleton key={index}></Skeleton>)
          : filteredToy.map((toy) => <Card key={toy.toyId} toy={toy}></Card>)}
      </div>
    </div>
  );
};

export default AllToy;
