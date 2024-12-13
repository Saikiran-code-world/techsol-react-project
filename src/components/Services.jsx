import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop//runs infinite times the code
        autoPlay   
        showStatus={false} //tells about 1/2 images i.e out of which iage is in display so we are hiding
        showArrows={false}//side arrows hiding
        showThumbs={false}//down show the images so we are hiding
        interval={1000}//how many time we need to iterate after opening
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
