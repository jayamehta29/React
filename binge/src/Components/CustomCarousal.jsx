import { React, useState, useEffect } from 'react'
import axios from "axios";
import { API_KEY, API_URL, IMAGE_URL } from "../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Youtube from 'react-youtube';
import { useHistory } from 'react-router-dom';

const CustomCarousal = () => {

  const [mdata, setMd] = useState([]);
  const [currmovie, setCurrMovie] = useState("avengers");

  useEffect(() => {
    async function apiData() {
      let data = await axios.get(API_URL + "/search/movie", {
        params: { api_key: API_KEY, page: 1, query: currmovie },
      });
      let mdata = data.data.results.slice(0, 10);
      setMd(mdata);
    }

    apiData();
  }, []);


  const [detailedMO, setdetailedMO] = useState({});
  const [poster_path, setposter_path] = useState("");
  useEffect(() => {
    async function apiData() {
      let response = await axios.get(
        `${API_URL}/movie/${mdata.id}?api_key=${API_KEY}`
      );
      detailedMO = response.data;
      // console.log(detailedMO);
      let posterPath = IMAGE_URL + detailedMO.poster_path;

      setposter_path(posterPath);
      setdetailedMO(...detailedMO, poster_path);
    }

    apiData();
  }, []);
  
  const opts = {
    height: "390",
    width: "88%",
    playerVars: {
      autoplay: 1,
      origin: 'http://localhost:3000',
    },
  };

  const [trailerUrl, setTrailerUrl] = useState("");

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
  const history = useHistory();
  
  const newPath=(movie)=>{
    history.push(`/MoviePage/${movie.id}`);
  }

  return (
    <>
      <Carousel style={{ backgroundColor: "#363945"}} slide={true} fade={false}>
        {mdata.map((mdata) => {
          // console.log(mdata);
          return (
            <Carousel.Item>
              <div className="left-crsl">
                <h2 style={{ color: "white" }}>{mdata.title}</h2>
                <div className="txt" style={{ width: "50%", }}>
                  <div className="text-md-left">{mdata.overview}</div>
                </div>
                <div className="btns">
                  <button className="cbtn diff-btn" onClick={() => handleClick(mdata)}><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />Watch Now</button>
                  <button className="cbtn" onClick={()=>newPath(mdata)}>details</button>
                </div>
              </div>
              <img src={IMAGE_URL + mdata.poster_path} className="d-block cimg" style={{ marginTop:"2rem" ,width: "30%", height: "300px", marginBottom: "30px", marginLeft: "47rem" }} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div style={{ backgroundColor: "#363945"}}>
        <div style={{marginLeft:"8rem"}}>
        { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
        
    </div>
    </>
  )
}

export default CustomCarousal;
