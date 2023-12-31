import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ setSearchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em"></MdSearch>
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
