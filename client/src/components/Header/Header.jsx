import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchSpots, filterByRating } from "../../redux/actions/SpotActions";
import { ratingsFilter } from "../../utils/ratings";
import "./Header.css";
// import { useSelector } from "react-redux";

const Header = ({ search, onChange }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("5");

  useEffect(() => {
    dispatch(searchSpots(search));
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(filterByRating(filter));
  }, [filter, dispatch]);

  return (
    <header className="header">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/" className="link">
          HOME
        </Link>

        <Link to="/create-spot" className="link">
          CREATE SPOT
        </Link>
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
