import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuthInfo from "../../../hooks/useAuthInfo";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const { user } = useAuthInfo();
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "This user will deleted permanently from your website!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire("Something went wrong");
          }
        });
      }
    });
  };
  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire(`Requested user is admin now`);
        refetch();
      }
    });
  };
  const handleMakeAdminUser = (id) => {
    axiosSecure.patch(`/user/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire(`Requested admin is user now`);
        refetch();
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"How Many??"} subheading={"MANAGE ALL USERS"} />
      <div className=" px-10">
        <div className="overflow-x-auto border rounded-t-xl">
          <table className="table">
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {!isLoading &&
                users.map((user, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        <button
                          onClick={() => handleMakeAdminUser(user._id)}
                          className="btn btn-sm"
                        >
                          Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="text-white bg-[#D1A054] btn btn-sm"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm bg-[#B91C1C] text-white"
                        onClick={() => handleDelete(user._id)}
                      >
                        <MdDelete className="size-4 " />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
