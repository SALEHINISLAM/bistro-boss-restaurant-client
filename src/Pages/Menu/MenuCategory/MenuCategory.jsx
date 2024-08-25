import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../SharedComponents/MenuItem/MenuItem';
import BottomBorderButton from '../../SharedComponents/BottomBorderButton/BottomBorderButton';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, link}) => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 pb-8 gap-4 lg:gap-10'>
            {
                items.map(item=>(
                    <MenuItem key={item._id} item={item}/>
                ))
            }
            </div>
            <Link to={`/order/${link?link:'salad'}`}>
            <BottomBorderButton title={'ORDER YOUR FAVORITE FOOD'}/>
            </Link>
        </div>
    );
};

MenuCategory.propTypes = {
    
};

export default MenuCategory;