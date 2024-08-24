import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({item}) => {
    const {image, name, recipe, price, _id}=item;
    return (
        <div className='flex gap-4'>
            <img src={image} alt="" className='h-28 w-32 rounded-full rounded-tl-none'/>
            <div className="">
            <h3 className='uppercase'>
                {
                    name
                }------------------
            </h3>
            <p>
                {recipe}
            </p>
            </div>
            <p>
                {price} $
            </p>
        </div>
    );
};

MenuItem.propTypes = {
    
};

export default MenuItem;