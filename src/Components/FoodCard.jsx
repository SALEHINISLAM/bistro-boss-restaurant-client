import React from "react";
import PropTypes from "prop-types";
import useAuthInfo from "../hooks/useAuthInfo";
import Swal from "sweetalert2";
import { replace, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuthInfo();
  const { image, name, recipe, price, _id } = item;

  const navigate=useNavigate()
  const location=useLocation()
  const axiosSecure=useAxiosSecure()
  const [,refetch]=useCart()

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email ) {
      console.log(user.displayName)
      const cartItem={
        menuId: _id,
        email: user.email,
        food: food
      }
      axiosSecure.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire(`${food?.name} added to your cart...`)
        }
        //refetch the card 
        refetch()
      })
    }else{
      Swal.fire({
        title: "You are not logged in",
        text: "You won't be able to add to cart.Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to the login
          navigate('/login', {state:{from:location}}, replace)
        }
      });
    }
  };
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
          <h2 className="text-2xl font-semibold text-center">
            {name ? name : "Shoes!"}
          </h2>
          <p>
            {recipe
              ? recipe
              : "If a dog chews shoes whose shoes does he choose?"}
          </p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn bg-[#E8E8E8] uppercase border-b-2 border-t-0 border-r-0 border-l-0 text-[#BB8506] border-b-[#BB8506] hover:bg-[#1F2937]"
            >
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
