import React from "react";
import PropTypes from "prop-types";

const BottomBorderButton = ({ title }) => {
  return (
    <div className="flex justify-center items-center pb-16">
      <button className="uppercase btn bg-transparent border-b-2 border-t-0 border-r-0 text-black border-l-0 border-b-black hover:btn-error">
        {title? title: 'Read More'}
      </button>
    </div>
  );
};

BottomBorderButton.propTypes = {};

export default BottomBorderButton;
