import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchSpots, filterByRating } from "../../redux/actions/SpotActions";
import { ratingsFilter } from "../../utils/ratings";

const Header = ({ search, setSearch, onChange }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("5");

  useEffect(() => {
    dispatch(searchSpots(search));
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(filterByRating(filter));
  }, [filter, dispatch]);

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
        <div className="filterByRating">
          <select onChange={(e) => setFilter(e.target.value)}>
            {ratingsFilter.map((rating) => (
              <option value={rating.value}>{rating.label}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
