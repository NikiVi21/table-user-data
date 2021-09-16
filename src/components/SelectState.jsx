import React from "react";
import "../App.css";

let SelectState = (props) => {
  let stateArr = props.allValue.map((u) => u.adress.state);
  let iterArr = [...new Set(stateArr)].sort();

  return (
    <select
      className="searchState"
      defaultValue={"DEFAULT"}
      onChange={(e) => props.onSearchState(e.target.value)}
    >
      <option value="DEFAULT">Filter by state</option>
      {iterArr.map((u, i) => {
        return (
          <option key={i} value={u}>
            {u}
          </option>
        );
      })}
    </select>
  );
};

export default SelectState;
