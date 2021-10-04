import { React, useState, useEffect } from 'react'
import './App.css';
import CustomNavbar from "./Components/CustomNavbar.jsx"
import CustomCarousal from "./Components/CustomCarousal.jsx";
import axios from "axios";
import { API_KEY, API_URL, apireq } from "./api";
import CustomRow from "./Components/CustomRow/CustomRow.jsx";


function App() {

  return (
    <>
      <CustomNavbar/>
      <CustomCarousal/>
      <CustomRow title="Trending Now" link={apireq.trending} />
      <CustomRow title="Top Rated" link={apireq.topRated} />
      <CustomRow title="Action Movies" link={apireq.actionMovies} />
      <CustomRow title="Comedy Movies" link={apireq.comedyMovies} />
    </>
  );
}

export default App;

