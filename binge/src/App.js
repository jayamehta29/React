import { React } from 'react'
import './App.css';
import CustomNavbar from "./Components/CustomNavbar.jsx"
import CustomCarousal from "./Components/CustomCarousal.jsx";
import { apireq } from "./api";
import CustomRow from "./Components/CustomRow/CustomRow.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviePage from './Components/MoviePage';

function App() {


  return (
    <>
      <CustomNavbar />
      <Router>
        <Route exact path="/">
        <CustomCarousal />
        <CustomRow title="Trending Now" link={apireq.trending} />
        <CustomRow title="Top Rated" link={apireq.topRated} />
        <CustomRow title="Action Movies" link={apireq.actionMovies} />
        <CustomRow title="Comedy Movies" link={apireq.comedyMovies} />
        </Route>
        <Route path="/MoviePage" component={MoviePage} />
      </Router>


    </>
  );
}

export default App;

