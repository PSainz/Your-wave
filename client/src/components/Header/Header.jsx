import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchSpots, filterByRating } from "../../redux/actions/SpotActions";

const Header = ({ search, setSearch, onChange }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("2");

  useEffect(() => {
    dispatch(searchSpots(search));
    dispatch(filterByRating());
    // if (sort === 'desc') {
    // 	dispatch(sortPostsDesc());
    // }
    // if (sort === 'asc') {
    // 	dispatch(sortPostsAsc());
    // }
    // [search, sort, dispatch]
  }, [search, filter, dispatch]);

  console.log(filter, "FILTER");

  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-spot">Cspot</Link>
        </li>
      </div>
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Search"
          />
        </div>
        <div className="sort">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
