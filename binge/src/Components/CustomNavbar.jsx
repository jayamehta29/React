import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState, useEffect } from 'react'
import "../App.css";

// import axios from "axios";
// import { API_KEY, API_URL, IMAGE_URL } from "../api";
import SearchPage from "./SearchPage";


const CustomNavbar = () => {

    

    const [keypress, setkeypress] = useState(false);
    const [newMovieName, setnewMovieName] = useState([]);
    function handleOnChange(e) {
        let value = e.target.value;
        console.log(value);
        setnewMovieName(value);
    };

    function handleKeyPress(e) {
        if (e.key == "Enter") {
            // <Link to="./SearchPage">
            setkeypress(true);
            setnewMovieName(newMovieName);
            e.preventDefault();

        }
    };
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: "white", marginLeft: "2rem" }}>
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
                            {/* <button className="btn btn-outline-info" type="submit" onClick={handleOnClick}>SEARCH</button> */}
                        </form>
                    </div>
                </div>
            </nav>
                {keypress ?
                
                    <SearchPage obj={newMovieName}/>
                     : null}
        </>
    )
}

export default CustomNavbar;
