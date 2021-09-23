import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const CustomNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{color:"white",marginLeft: "2rem"}}>
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
                            
                            <input
                                className="form-control me-3"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <img src="https://cdn.pixabay.com/photo/2021/04/23/19/57/yorkshire-terrier-6202621_960_720.jpg" style={{borderRadius:"50%", width:"3rem", height:"3rem"}}/>
                            {/* <button className="btn btn-outline-success" type="submit">
                                Search
                            </button> */}
                            <div className="user">Jaya</div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CustomNavbar;
