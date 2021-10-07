import React, { useState, useEffect } from "react";
import axios from "axios";

import { IMAGE_URL } from "../../api";
import "./CustomRow.css";
import { useHistory } from 'react-router-dom';


const CustomRow = ({title, link}) => {

    const [movies, setMovies] = useState([]);


    // Options for react-youtube
    const opts = {
        height: "390",
        width: "80%",
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(link);
            let d = request.data.results.slice(0,6);
            setMovies(d);
            return request;
        }
        fetchData();
    }, [link]);

    const history = useHistory();
    const newPath=(movie)=>{
        history.push(`/MoviePage/${movie.id}`);
      }
    

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        movie.backdrop_path !== null && (
                            <img
                                className={"row_poster", "row_posterLarge"}
                                src={`${IMAGE_URL}${movie.poster_path }`}
                                alt={movie.name}
                                key={movie.id}
                                onClick={() => newPath(movie)}
                            />
                        )
                )}
            </div>
        </div>
    )
}

export default CustomRow
