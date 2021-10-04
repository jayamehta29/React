import React, { useState,useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { API_URL, API_KEY } from "../../api";
import "./MoviePage.css";

const MoviePage = (movieObj,dmo) => {
  const [vObj, setvObj] = useState({});

  useEffect(() => {
    async function apiData() {
      let response = await axios.get(
        `${API_URL}/movie/${movieObj.id}/videos?api_key=${API_KEY}&language=en-US`
      );
      let vObj = response.data.results.filter((videoObj) => {
        if (videoObj.type == "Trailer" && videoObj.site == "YouTube") {
          return true;
        }
        return false;
      });
      setvObj(vObj[0]);

    }

    apiData();
  },[]);

  
  const opts = {
    height:"100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (

    <div className="movie-page">
      <div className="movie-page-poster">
        <img src={dmo.poster_path} alt="" />
      </div>
      <div className="movie-page-details">
        <div className="movie-title-info">
          <h1>
            {movieObj.title} <br></br> {movieObj.vote_average} IMDB
          </h1>
          <span>{movieObj.tagline}</span>
          <p>{movieObj.overview}</p>
        </div>
        <div className="movie-trailer">
          <YouTube videoId={vObj.key} opts={opts}></YouTube>
        </div>
      </div>
    </div>
  )
}

export default MoviePage;
