import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({heading, subheading, bg}) => {
    return (
        <div className='text-center my-8 mt-20 flex flex-col justify-center items-center space-y-4'>
            <p className='text-[#D99904]'>
            ---{
                    heading
                }---
            </p>
            <h3 className={`${bg? 'text-white':'text-black' }  border-y-2 py-4 text-3xl`}>
                {subheading}
            </h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
    bg: PropTypes.bool
};

export default SectionTitle;