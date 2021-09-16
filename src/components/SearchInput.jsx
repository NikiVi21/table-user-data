import React from "react";
import "../App.css";

let SearchInput = (props) => {
  return (
    <input
      className="search"
      placeholder="Search by name"
      type="text"
      onChange={(e) => props.onSearch(e.target.value)}
      value={props.value}
    />
  );
};

export default SearchInput;
