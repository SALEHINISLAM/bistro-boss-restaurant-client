import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle";
import "./sweper.css";
const OrderOnline = (props) => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subheading={"ORDER ONLINE"}
      />
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/6HbNMB6/slide1.jpg"
            alt=""
            className="w-full h-full"
          />
          <h3 className="text-3xl font-cinzel font-semibold text-white text-center uppercase -mt-12 drop-shadow-md">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2yBjJSv/slide2.jpg"
            alt=""
            className="w-full h-full"
          />
          <h3 className="text-3xl font-cinzel font-semibold text-white text-center uppercase -mt-12 drop-shadow-md">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/4jx4pCj/slide3.jpg"
            alt=""
            className="w-full h-full"
          />
          <h3 className="text-3xl font-cinzel font-semibold text-white text-center uppercase -mt-12 drop-shadow-md">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/4WbP5g2/slide4.jpg"
            alt=""
            className="w-full h-full"
          />
          <h3 className="text-3xl font-cinzel font-semibold text-white text-center uppercase -mt-12 drop-shadow-md">
            deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/6HbNMB6/slide1.jpg"
            alt=""
            className="w-full h-full"
          />
          <h3 className="text-3xl font-cinzel font-semibold text-white text-center uppercase -mt-12 drop-shadow-md">
            Onions
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

OrderOnline.propTypes = {};

export default OrderOnline;
