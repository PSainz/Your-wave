import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from "./components/Home/Home.jsx";
import Spots from "./components/Spots/Spots.jsx";
import CreateSpot from "./components/CreateSpot/CreateSpot.jsx";
import { fetchSpots } from "./redux/actions/SpotActions";



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(fetchSpots());
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/spots" element={<Spots setCurrentId={setCurrentId}  />}></Route>
          <Route exact path="/create-spot" element={<CreateSpot currentId={currentId} setCurrentId={setCurrentId} />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
