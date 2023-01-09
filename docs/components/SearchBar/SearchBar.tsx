import React from "react";
import Search from "../../assets/icons/Search";

function SearchBar() {
  return (
    <div className="w-full border border-[#D0D5DD] p-2 rounded-lg flex space-x-2 placeholder:text-[#D7D7D7]">
      <Search />
      <input
        className="w-full outline-none"
        type="text"
        placeholder="Search documentation, ex. protocols... "
      />
    </div>
  );
}

export default SearchBar;
