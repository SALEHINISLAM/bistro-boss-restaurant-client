import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../SharedComponents/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import BottomBorderButton from '../../SharedComponents/BottomBorderButton/BottomBorderButton';

const PopularMenu = props => {
    const [menu]=useMenu()
    const popular=menu.filter(item=>item.category==='popular')
    // const [menu, setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('/menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category==='popular');
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <div className='container mx-auto mb-12'>
            <SectionTitle heading={'Check it out'} subheading={'FROM OUR MENU'}/>
            <div className='grid pb-8 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10'>
            {
                popular.map(item=>(
                    <MenuItem key={item._id} item={item}/>
                ))
            }
            </div>
            <BottomBorderButton title={'View Full Menu'}/>
        </div>
    );
};

PopularMenu.propTypes = {
    
};

export default PopularMenu;