import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './../Navbar/Navbar.jsx';
 
function Home (){
    return (
        <div>
        <Navbar />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/spots">Spots</Link></li>
                <li><Link to="/create-spot">Create Spot</Link></li>
             </ul>
        </div>
    )
}
 
export default Home;