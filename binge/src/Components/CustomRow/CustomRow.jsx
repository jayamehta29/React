import React, { useState, useEffect } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import { IMAGE_URL, API_URL,API_KEY } from "../../api";
import "./CustomRow.css";

const CustomRow = ({title, link}) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerurl = await axios.get(
                `${API_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };

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
                                onClick={() => handleClick(movie)}
                            />
                        )
                )}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default CustomRow
