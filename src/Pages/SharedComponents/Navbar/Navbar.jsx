import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = (props) => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [cart]=useCart()
  const navbarOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>order food</NavLink>
      </li>
      <li>
        <NavLink to={"secret"}>secret</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut();
    if (!loading) {
      Swal.fire("Logout Successful");
    }
  };
  return (
    <div>
      <div className="navbar fixed z-10 w-full  bg-black bg-opacity-50 text-white ">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <a
            className="btn btn-ghost flex flex-grow-0 w-1/3 h-fit md:w-fit"
            href="/"
          >
            <img src="/bbr.svg" alt="" className="lg:h-[75px] md:h-[60px]" />
          </a>
          <div className=" lg:hidden">
            <a className="btn">Button</a>
          </div>
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm uppercase dropdown-content absolute top-10 right-1 bg-black text-white rounded-box z-[1]  w-52 p-2 shadow"
              >
                {navbarOptions}
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase">
              {navbarOptions}
            </ul>
            <div className="hidden lg:flex">
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li className="text-error text-xl font-semibold text-center bg-white rounded-xl">
                      Hi {!loading && user.displayName}
                    </li>
                    <li className="text-error text-center bg-white rounded-xl">
                      <button
                        className="flex btn btn-error"
                        onClick={() => handleLogOut()}
                      >
                        Logout
                      </button>
                    </li>
                    <li className="text-error text-center bg-white rounded-xl">
                      <Link to={'/dashboard/cart'} className="w-full">
                      <div  className="btn w-full text-white bg-black flex">
                        <FaShoppingCart/>
                        <div className="badge badge-secondary">+{cart.length}</div>
                      </div>
                      </Link>
                      
                    </li>
                  </ul>
                </div>
              ) : (
                <a className="btn" href="/login">
                  Login
                </a>
              )}
            </div>
          </div>

          {/* <div className=" lg:hidden">
            <a className="btn">Button</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
