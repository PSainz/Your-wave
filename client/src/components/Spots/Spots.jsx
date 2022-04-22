import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import Spot from "../Spot/Spot";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../../redux/actions/SpotActions";
import Header from "../Header/Header";
import Paginate from "../Paginate/Paginate";
// import { Button } from "@mui/material";
// import useStyles from "./styles";

const Spots = ({ setCurrentId }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { spots, loaded } = useSelector((state) => state.SpotReducers);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(spots, "SPOTS RENDER PAGINA SPOTS");
  // const classes = useStyles();

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  const spotsPerPage = 6;
  const totalSpots = spots.length;

  const indexOfLastSpot = currentPage * spotsPerPage;
  const indexOfFirstSpot = indexOfLastSpot - spotsPerPage;
  const filterSpots = spots.slice(indexOfFirstSpot, indexOfLastSpot);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
      />
      {!loaded ? (
        <CircularProgress />
      ) : (
        <div className="container">
          <Grid className={""} container alignItems="stretch" spacing={3}>
            {filterSpots.map((spot) => (
              <Grid key={spot._id} item xs={12} sm={6} md={6}>
                <Spot spot={spot} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
          {totalSpots > spotsPerPage && (
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalSpots}
              postPerPage={spotsPerPage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Spots;
