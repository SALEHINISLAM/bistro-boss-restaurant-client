import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../Components/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container mx-auto">
      <SectionTitle
        heading={"What Our Clients Say"}
        subheading={"TESTIMONIALS"}
      />
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-20 flex flex-col text-gray-700 justify-center items-center text-center">
                <Rating value={review.rating} style={{maxWidth:180}} readOnly></Rating>
                <FaQuoteLeft className="mt-8 size-8"/>
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-[#CD9003] uppercase">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
