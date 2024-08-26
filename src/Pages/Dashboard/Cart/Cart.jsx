import React from "react";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  console.log(cart);
  const totalPrice = cart?.reduce(
    (total, item) => parseFloat(total) + parseFloat(item.food.price),
    0
  );
  console.log(totalPrice);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "This item will deleted permanently from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
          else{
            Swal.fire('Something went wrong')
          }
        });
      }
    });
  };
  return (
    <div className="px-10">
      <SectionTitle heading={"My Cart"} subheading={"WANNA ADD MORE"} />
      <div className="bg-white text-black uppercase">
        <div className="p-6 flex justify-between">
          <h2 className="text-4xl font-bold">Total Orders: {cart.length}</h2>
          <h2 className="text-4xl font-bold">total price: {totalPrice}</h2>
          <button className="bg-[#D1A054] btn text-white">Pay</button>
        </div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr className="hover:bg-gray-400">
                    <td>{index + 1}</td>
                    <td>
                      <div className="mask mask-squircle h-12 w-12 xl:h-24 xl:w-24">
                        <img src={item.food.image} alt="" />
                      </div>
                    </td>
                    <td>{item.food.name}</td>
                    <td>{item.food.price}</td>
                    <td>
                      <button
                        className="btn bg-[#B91C1C] text-white"
                        onClick={() => handleDelete(item._id)}
                      >
                        <MdDelete className="size-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
