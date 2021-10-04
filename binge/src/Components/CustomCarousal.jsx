import { React, useState, useEffect } from 'react'
import axios from "axios";
import { API_KEY, API_URL, IMAGE_URL } from "../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopHouse, faPlay } from '@fortawesome/free-solid-svg-icons';
import MoviePage from "./MoviePage/MoviePage";
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCarousal = () => {

  const [mdata, setMd] = useState([]);
  const [currmovie, setCurrMovie] = useState("avengers");

  useEffect(() => {
    async function apiData() {
      let data = await axios.get(API_URL + "/search/movie", {
        params: { api_key: API_KEY, page: 1, query: currmovie },
      });
      let mdata = data.data.results.slice(0, 5);
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

  const [showComponent, setshowComponent] = useState(false);

  function mComp() {
    return (
      <>
        {setshowComponent(true)};
        {showComponent ?

          <MoviePage movieObj={mdata} dmo={detailedMO} /> :
          null
        }
      </>
    );
  }

  return (
    <>
      {/* <div className="cusmovies" style={{ backgroundColor: "#363945" }}> */}

      <Carousel style={{ backgroundColor: "#363945" }} slide={true} fade={false}>
        {mdata.map((mdata) => {
          // console.log(mdata);
          return (
            // <>
              <Carousel.Item>
                <div className="left-crsl">
                  <h2 style={{ color: "white" }}>{mdata.title}</h2>
                  <div className="txt" style={{ width: "50%", }}>
                    <div className="text-md-left">{mdata.overview}</div>
                  </div>
                  <div className="btns">
                    <button className="cbtn diff-btn"><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />Watch Now</button>
                    <button className="cbtn" onClick={() => mComp}>details</button>
                  </div>
                </div>
                <img src={IMAGE_URL + mdata.poster_path} className="d-block cimg" style={{ width: "30%", height: "300px", marginBottom: "20px", marginLeft: "47rem" }} />
              </Carousel.Item>
            // </>
          );
        })}
      </Carousel>


      {/* <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="left-crsl">
                    <h2 style={{ color: "white" }}>{mdata.title}</h2>
                    <div className="txt" style={{ width: "50%", }}>
                      <div className="text-md-left">{mdata.overview}</div>
                    </div>
                    <div className="btns">
                      <button className="cbtn diff-btn"><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />Watch Now</button>
                      <button className="cbtn" onClick={()=>mComp}>details</button>
                    </div>
                  </div>
                  <img src={IMAGE_URL + mdata.poster_path} className="d-block cimg" style={{ width: "30%", height: "300px", marginBottom: "20px" , marginLeft: "47rem"}} />
                </div>
              </div> */}

      {/* </div> */}
    </>
  )
}

export default CustomCarousal;
