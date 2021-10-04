import { React, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";
import { API_KEY, API_URL } from "../api";
import CustomCarousal from './CustomCarousal';
// import SearchedMovie from './SearchedMovie';

const CustomNavbar = (nmd) => {

    const [newMovieName, setnewMovieName] = useState("");
    const [movieData, setmovieData] = useState(nmd);

    async function setMovies(newMovieName) {
        let data = await axios.get(API_URL + "/search/movie", {
            params: { api_key: API_KEY, page: 1, query: newMovieName },
        });
        let moviesData = data.data.results.slice(0, 5);

        console.log(moviesData);
        //     moviesData: moviesData,
        //   currentMovie: newMovieName,
        setmovieData(moviesData);
        <CustomCarousal smd={movieData} />
        // <CustomCarousal />

    };

    function handleOnChange(e) {
        // console.log(e);
        let value = e.target.value;
        // newMovieName = value;
        setnewMovieName(value);
    };

    function handleKeyPress(e) {
        if (e.key == "Enter") {
            console.log(newMovieName);
            setMovies(newMovieName);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "white", marginLeft: "2rem" }}>
                        BINGE
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    TV SHOWS
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    MOVIES
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    KIDSS
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">

                            {/* <input
                                className="form-control me-3"
                                aria-label="Search"
                                value={newMovieName}
                                type="text"
                                placeholder="Search"
                                onChange={() => handleOnChange()}
                                onKeyPress={() => handleKeyPress()}
                            /> */}
                            <div className="search-btn">
                                <input
                                    className="form-control me-3"
                                    aria-label="Search"
                                    value={newMovieName}
                                    type="text"
                                    placeholder="Search"
                                    onChange={handleOnChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                            {/* <button className="btn btn-outline-info" type="submit">SEARCH</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CustomNavbar;
