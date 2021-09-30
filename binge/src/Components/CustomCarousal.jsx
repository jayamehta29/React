import { React, useState, useEffect } from 'react'
// import SingleCarousal from './SingleCarousal';
import axios from "axios";
import { API_KEY, API_URL, IMAGE_URL } from "../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {Carousel} from 'react-bootstrap';

// import '../bootstrap/dist/css/bootstrap.min.css';

const CustomCarousal = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  const [mdata, setMd] = useState([]);
  const [currmovie, setCurrMovie] = useState("avengers");
  const [pg, setPg] = useState([]);
  const [currPg, setCurrPg] = useState(1);

  useEffect(() => {
    async function apiData() {
      let data = await axios.get(API_URL + "/search/movie", {
        params: { api_key: API_KEY, page: 1, query: currmovie },
      });
      let mdata = data.data.results.slice(0, 5);
      let pagesCount = data.data.total_pages; //3
      // let pages = [];
      // let isLiked=;
      for (let i = 1; i <= pagesCount; i++) {
        pg.push(i);
      }

      setMd(mdata);
      setPg(pg);
    }

    apiData();
  });
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
        setdetailedMO(...detailedMO,poster_path);
      }
  
      apiData();
    });



  return (
    <>
      {/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}


      {/* <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ background: "#363945" }}>

        <div className="carousel-indicators " >
          {mdata.map((mdata) => {
            return <button type="button" key={mdata.id} data-bs-target="#demo" data-bs-slide-to={mdata.id}></button>
          })}

        </div> */}

        

          <div className="cusmovies" style={{backgroundColor:"#363945"}}>
            {mdata.map((mdata) => {
              return (
                <>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="left-crsl">
                      <h2 style={{ color: "white" }}>{mdata.title}</h2>
                      <div className="txt" style={{ width: "50%", }}>
                        <div className="text-md-left">{mdata.overview}</div>
                      </div>
                      <div className="btns">
                        <button className="cbtn diff-btn"><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />Watch Now</button>
                        <button className="cbtn" >details</button>
                      </div>
                    </div>
                    <img src={IMAGE_URL+mdata.poster_path} className="d-block cimg" style={{ width: "40%",height:"300px", marginBottom:"20px"}} />
                  </div>
                </div>
                </>
              );
            })}
            </div>
         
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{ color: "black" }}>
          <span className="carousel-control-prev-icon" ></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{ color: "black" }}>
          <span className="carousel-control-next-icon"></span>
        </button> */}

      {/* // </div> */}
    </>
  )
}

export default CustomCarousal;
