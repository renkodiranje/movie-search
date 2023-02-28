import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleReset = () => {
    setSearchInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
    handleReset();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchInput}
        placeholder="Search for favorite movie"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" value="SEARCH" onClick={handleSearch}>
        <span>Search</span>
      </button>
    </form>
  );
};
export default Search;
