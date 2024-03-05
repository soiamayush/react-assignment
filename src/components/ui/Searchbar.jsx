import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../../slice/searchSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <div className="search-bar">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Search with name"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <img src="/src/assets/search.svg" alt="search" />
    </div>
  );
};

export default Searchbar;
