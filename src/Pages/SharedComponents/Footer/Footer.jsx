import React from "react";
import PropTypes from "prop-types";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <div>
      <footer className="footer gap-0">
        <aside className="bg-[#1F2937] text-white text-center flex flex-col justify-center items-center w-full h-full p-10">
          <h3 className="text-xl font-medium text-center">
            CONTACT US
          </h3>
          <p >
          123 ABS Street, Uni 21, Bangladesh <br />
+88 123456789 <br />
Mon - Fri: 08:00 - 22:00 <br />
Sat - Sun: 10:00 - 23:00 <br />
          </p>
        </aside>
        <nav className="bg-[#111827] text-white w-full h-full p-10 flex flex-col justify-center items-center">
          <h6 className="text-xl font-medium">Follow US</h6>
          <p>
          Join us on social media
          </p>
          <div className="grid grid-flow-col gap-4 pt-6">
            <a>
              <BsFacebook className="sm:size-5 md:size-6 lg:size-7 xl:size-8"/>
            </a>
            <a>
              <BsInstagram className="ssm:size-5 md:size-6 lg:size-7 xl:size-8"/>
            </a>
            <a>
              <BsTwitterX className="sm:size-5 md:size-6 lg:size-7 xl:size-8"/>
            </a>
          </div>
        </nav>
      </footer>
      {/* copy */}
      <footer className="footer footer-center bg-[#151515] text-white p-4 ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by <Link>
            Bistro Boss Restaurant
            </Link>
          </p>
        </aside>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
