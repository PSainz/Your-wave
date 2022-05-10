import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import Spot from "../Spot/Spot";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../../redux/actions/SpotActions";
import Header from "../Header/Header";
import Paginate from "../Paginate/Paginate";
import "./Spots.css";

const Spots = ({ setCurrentId }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { spots, loaded } = useSelector((state) => state.SpotReducers);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  const seeAll = () => {
    dispatch(fetchSpots());
    setSearch("");
  };

  const spotsPerPage = 6;
  const totalSpots = spots.length;

  const indexOfLastSpot = currentPage * spotsPerPage;
  const indexOfFirstSpot = indexOfLastSpot - spotsPerPage;
  const filterSpots = spots.slice(indexOfFirstSpot, indexOfLastSpot);

  return (
    <>
      <div className="full-container-spots">
        <Header
          search={search}
          setSearch={setSearch}
          onChange={handleChangeSearch}
        />
        <div className="div-button-see-all">
          <button onClick={seeAll} className="button-see-all">
            See all
          </button>
        </div>
        {!loaded ? (
          <CircularProgress />
        ) : (
          <div className="container-spots">
            <Grid className={""} container alignItems="stretch" spacing={3}>
              {filterSpots.map((spot) => (
                <Grid key={spot._id} item xs={12} sm={6} md={6}>
                  <Spot spot={spot} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={totalSpots}
          postPerPage={spotsPerPage}
        />
      </div>
    </>
  );
};

export default Spots;
