import { React, useState, useEffect } from 'react'
import Youtube from 'react-youtube';
import axios from "axios";
import { API_KEY, API_URL, IMAGE_URL } from "../api";
import "../Components/MoviePage.css"

const MoviePage = (props) => {

    const [mdata, setMd] = useState([]);
    let str = props.location.pathname;
    let id = str.substring(11);
    const [poster_path, setposter_path] = useState("");

    useEffect(() => {
        // https://api.themoviedb.org/3/movie/24428?api_key=a9df27d45e5090f9519e8
        async function apiData() {
            let data = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
            let mdata = data.data;
            console.log(mdata.backdrop_path);
            let poster = IMAGE_URL + mdata.backdrop_path;
            setposter_path(poster);
            setMd(mdata);
        }

        apiData();
    }, []);

    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function apidata() {
            if (trailerUrl) {
                setTrailerUrl("");
            } else {
                let trailerurl = await axios.get(
                    `${API_URL}/movie/${id}/videos?api_key=${API_KEY}`
                );
                setTrailerUrl(trailerurl.data.results[0]?.key);
            }
        }
        apidata();
    }, [])

    const opts = {
        height: "380",
        width: "100%",
        playerVars: {
            autoplay: 1,
            origin: 'http://localhost:3000',
        },
    };

    let { title, tagline, vote_average, overview } = mdata;
   


    return (
        <>
            <div className="movie-page">
                <div className="movie-page-poster">
                    <img src={poster_path} alt="" />
                </div>
                <div className="movie-page-details">
                    <div className="movie-title-info">
                        <h1>
                            {title} <br></br> {vote_average} IMDB
                        </h1>
                        <h3>{tagline}</h3>
                        <p>{overview}</p>
                    </div>
                    <div className="movie-trailer">
                        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviePage
