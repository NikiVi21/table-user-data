import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { getDataThunk } from "./redux/appReducer";
import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import SelectState from "./components/SelectState";

const App = (props) => {
  useEffect(() => {
    props.getDataThunk();
    // eslint-disable-next-line
  }, []);

  const [searchValue, setSearchValue] = useState("");

  const filterNames = ({ firstName }) => {
    return firstName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  const [searchState, setSearchState] = useState("");

  const filterState = ({ adress }) => {
    if (!searchState || searchState === "DEFAULT") return -1;
    if (adress.state === searchState) return 1;
  };
  let filteredArrByNames = props.data.filter(filterNames);
  let filteredArr = props.data.filter(filterNames).filter(filterState);

  const [user, setUser] = useState();

  let sd = document.getElementsByClassName("sortingDirection");
  function sortTable(n) {
    let table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            sd[n].innerHTML = "▲";
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            sd[n].innerHTML = "▼";
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function sortTablebyID(n) {
    let table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");

      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (dir === "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            if (n === 0) sd[0].innerHTML = "▲";
            else sd[4].innerHTML = "▲";
            break;
          }
        } else if (dir === "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            if (n === 0) sd[0].innerHTML = "▼";
            else sd[4].innerHTML = "▼";
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  //pagination

  const [currentPage, setCurrentPage] = useState(0);
  let previousPage = () => {
    if (currentPage !== 0) setCurrentPage(currentPage - 1);
  };
  let nextPage = () => {
    let pagesCount = Math.ceil(filteredArr.length / props.pageSize);
    if (currentPage + 1 < pagesCount) setCurrentPage(currentPage + 1);
  };
  //
  return (
    <div className="App">
      <div className="searchContainer">
        <SearchInput
          onSearch={setSearchValue}
          value={searchValue}
          setCurrentPage={setCurrentPage}
        />
        <SelectState
          allValue={filteredArrByNames}
          onSearchState={setSearchState}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <table id="myTable">
        <thead>
          <tr>
            <th onClick={() => sortTablebyID(0)}>
              id<span className="sortingDirection"> •</span>
            </th>
            <th onClick={() => sortTable(1)}>
              First name<span className="sortingDirection"> •</span>
            </th>
            <th onClick={() => sortTable(2)}>
              Last name<span className="sortingDirection"> •</span>
            </th>
            <th onClick={() => sortTable(3)}>
              Email<span className="sortingDirection"> •</span>
            </th>
            <th onClick={() => sortTablebyID(4)}>
              Phone<span className="sortingDirection"> •</span>
            </th>
            <th onClick={() => sortTable(5)}>
              State<span className="sortingDirection"> •</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data
            .filter(filterNames)
            .filter(filterState)
            .map((u) => {
              return (
                <tr key={u.phone} onClick={() => setUser(u)}>
                  <td>{u.id}</td>
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.adress.state}</td>
                </tr>
              );
            })
            .slice(
              currentPage * props.pageSize,
              (currentPage + 1) * props.pageSize
            )}
        </tbody>
      </table>
      <button className="pageBtn" onClick={previousPage}>
        ❮
      </button>
      <button className="pageBtn" onClick={nextPage}>
        ❯
      </button>
      {user ? (
        <div className="profileInfo">
          Profile info:
          <div>
            Select profile: {user.firstName} {user.lastName}
          </div>
          <div>Description: {user.description}</div>
          <div>Address: {user.adress.streetAddress}</div>
          <div>City: {user.adress.city}</div>
          <div>State: {user.adress.state}</div>
          <div>Index: {user.adress.zip}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  data: state.app.data,
  pageSize: state.app.pageSize,
});

export default compose(connect(mapStateToProps, { getDataThunk }))(App);
