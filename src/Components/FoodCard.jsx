import React from "react";
import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  return (
    <div>
      <div className="card shadow-xl rounded-none h-full">
        <figure>
          <img
            src={
              image
                ? image
                : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            className="w-full"
            alt="food"
          />
        </figure>
        <p className="bg-black text-base text-white p-2 px-4 absolute top-4 right-4">
          $ {price}
        </p>
        <div className="card-body text-black bg-[#F3F3F3]">
          <h2 className="text-2xl font-semibold text-center">{name ? name : "Shoes!"}</h2>
          <p>
            {recipe
              ? recipe
              : "If a dog chews shoes whose shoes does he choose?"}
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#E8E8E8] uppercase border-b-2 border-t-0 border-r-0 border-l-0 text-[#BB8506] border-b-[#BB8506] hover:bg-[#1F2937]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {};

export default FoodCard;
