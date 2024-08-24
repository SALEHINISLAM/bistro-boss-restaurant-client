import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom' 
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
const Banner = (props) => {
    const onChange=()=>{
    }
    const onClickItem=()=>{}
    const onClickThumb=()=>{}
  return (
    <div className="items-center justify-center">
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        autoPlay={true}
        interval={10000}
        infiniteLoop={true}
        showThumbs={true}
      >
        <div>
          <img src="https://i.ibb.co/LkNsRNP/01.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/QX9P9Tn/02.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/TLNZ8vJ/03.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/BzzKMx1/04.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/LZWqq7V/05.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/Wn1b9GG/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
