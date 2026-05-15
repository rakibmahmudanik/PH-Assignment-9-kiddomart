import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?search=${search}`);
  }, [navigate, search]);

  return (
    <div className="flex w-full items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="py-2 md:py-1.5 w-full md:w-70 bg-transparent outline-none placeholder-gray-500"
        type="search"
        placeholder="Search products"
      />
      <FiSearch />
    </div>
  );
};

export default Search;
