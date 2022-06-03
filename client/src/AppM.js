import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from "./components/Home/Home.jsx";
import Spots from "./components/Spots/Spots.jsx";
import CreateSpot from "./components/CreateSpot/CreateSpot.jsx";
import { fetchSpots } from "./redux/actions/SpotActions";



const AppD = () => {
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

export default AppD;

// import "./Desktop.css";
// import Iframe from "react-iframe";

// function Desktop() {
//   return (
//     <div class="smartphone">
//       <div class="content">
//         {/* <iframe src="/https://your-wave.netlify.app/" className="iframe" /> */}
//         <Iframe
//           url="https://your-wave.netlify.app/"
//           width="355px"
//           height="640px"
//           id="myId"
//           className="iframe"
//           display="initial"
//           position="relative"
//         />
//       </div>
//     </div>
//   );
// }

// export default Desktop;

// .smartphone {
//   position: relative;
//   width: 360px;
//   height: 640px;
//   margin: auto;
//   border: 16px black solid;
//   border-top-width: 60px;
//   border-bottom-width: 60px;
//   border-radius: 36px;
// }

// /* The horizontal line on the top of the device */
// .smartphone:before {
//   content: "";
//   display: block;
//   width: 60px;
//   height: 5px;
//   position: absolute;
//   top: -30px;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: #333;
//   border-radius: 10px;
// }

// /* The screen (or content) of the device */
// .smartphone .content {
//   width: 360px;
//   height: 640px;
//   background: white;
// }

// .iframe {
//   border: 1px solid red;
//   width: 100%;
//   height: 100%;
//   overflow-y: hidden;
// }
