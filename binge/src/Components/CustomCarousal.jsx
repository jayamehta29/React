import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// faPlay
const CustomCarousal = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ background: "#363945" }}>

        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators " >
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="left-crsl">
              <h2 style={{ color: "white" }}>NAME</h2>
              <div className="txt" style={{ width: "50%", }}>
                <div className="text-md-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae, alias nihil suscipit assumenda consectetur fugit voluptatum maxime harum consequuntur natus voluptates cumque minus iusto soluta, dolor possimus velit sint!</div>
              </div>
              <div className="btns">
                <button className="cbtn diff-btn"><FontAwesomeIcon icon={faPlay} style={{marginRight:"10px"}}/>Watch Now</button>
                <button className="cbtn">watchlist</button>
                <button className="cbtn">details</button>
              </div>
            </div>
            <img src="https://cdn.pixabay.com/photo/2021/04/23/19/57/yorkshire-terrier-6202621_960_720.jpg" className="d-block cimg" style={{ width: "35%" }} />
            <div className="carousel-caption" style={{ color: "black", width: "15rem", marginLeft: "62%" }}>
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>











          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2021/04/23/19/57/yorkshire-terrier-6202621_960_720.jpg" className="d-block cimg" style={{ width: "35%" }} />
            <div className="carousel-caption" style={{ color: "black", width: "15rem", marginLeft: "62%" }}>
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2021/04/23/19/57/yorkshire-terrier-6202621_960_720.jpg" className="d-block cimg" style={{ width: "35%" }} />
            <div className="carousel-caption" style={{ color: "black", width: "15rem", marginLeft: "62%" }}>
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{ color: "black" }}>
          <span className="carousel-control-prev-icon" ></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{ color: "black" }}>
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    </>
  )
}

export default CustomCarousal;
