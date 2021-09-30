import { React, useEffect, useState } from 'react'
import { API_KEY, API_URL, IMAGE_URL } from "../../src/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


const SingleCarousal = (movie) => {
// const [detailedMO, setdetailedMO] = useState({});
// const [poster_path, setposter_path] = useState("");
//   useEffect(() => {
//     async function apiData() {
//       let response = await axios.get(
//         `${API_URL}/movie/${movie.id}?api_key=${API_KEY}`
//       );
//       detailedMO = response.data;
//       // console.log(detailedMO);
//       let posterPath = IMAGE_URL + detailedMO.poster_path;

//       setposter_path(posterPath);
//       setdetailedMO(...detailedMO,poster_path);
//     }

//     apiData();
//   });



  return (
 
    
    
    
    // let { poster_path, title, vote_average } = movie;
     
    <>
    {/* <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ background: "#363945" }}> */}
    {/* {let posterPath = IMAGE_URL + poster_path};    */}

      {/* <!-- The slideshow/carousel --> */}
      {/* <div className="carousel-inner"> */}
      
      {/* <div className="carousel-item active">
        <div className="left-crsl">
          <h2 style={{ color: "white" }}>asdfhjkl</h2>
          <div className="txt" style={{ width: "50%", }}>
            <div className="text-md-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor odit cumque minus doloribus laborum error illo ab explicabo laboriosam atque expedita, est dolore voluptatum officiis dignissimos nostrum fuga, necessitatibus praesentium.</div>
          </div>
          <div className="btns">
            <button className="cbtn diff-btn"><FontAwesomeIcon icon={faPlay} style={{ marginRight: "10px" }} />Watch Now</button>
            <button className="cbtn">watchlist</button>
            <button className="cbtn">details</button>
          </div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="d-block cimg" style={{ width: "35%" }} />
        <div className="carousel-caption" style={{ color: "black", width: "15rem", marginLeft: "62%" }}>
          <h3>abcdefghijklmnopqrstuvw</h3>
          <p>123456789</p>
        </div>
      </div> */}

{/* </div> */}
{/* </div> */}
    </>
  )
}

export default SingleCarousal;
