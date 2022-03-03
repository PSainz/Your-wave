import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from "./components/Home/Home.jsx";
import Spots from "./components/Spots/Spots.jsx";
import CreateSpot from "./components/CreateSpot/CreateSpot.jsx";
import { getSpots } from "./actions/spots";



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getSpots());
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        {/* <ul>
                      <li><Link to="/">Home</Link></li>
                <li><Link to="/spots">Spots</Link></li>
                <li><Link to="/create-spot">Create Spot</Link></li>
             </ul> */}
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

// {/* <Routes>
// <div>
//   <Route exact path='/' component={<Home />} />
//   <Route exact path='/spots' component={<Spots />} />
//   {/* <Route path='/create-spot' component={CreateSpot} />
//   <Route path='/edit-book/:id' component={UpdateSpotInfo} />
//   <Route path='/show-book/:id' component={ShowSpotDetails} /> */}
// </div>
// </Routes> */}
