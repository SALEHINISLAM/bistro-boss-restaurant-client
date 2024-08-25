import React from "react";
import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";
const Cover = ({ img, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
      className="mb-20"
    >
      <div>
        <div className="hero min-h-svh lg:min-h-[800px]">
          <div className="hero-content border-black w-full text-center">
            <div className="p-16 py-24 bg-opacity-60 bg-black w-full text-white">
              <h1 className="mb-5 text-7xl font-bold font-cinzel">{heading? heading: 'Hello there'}</h1>
              <p className="mb-5 text-2xl uppercase font-cinzel">
                {
                    subHeading? subHeading: 'Provident cupiditate voluptatem et in. Quaerat fugiatassumenda excepturi exercitationem quasi. In deleniti eaque autrepudiandae et a id nisi.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {};

export default Cover;
