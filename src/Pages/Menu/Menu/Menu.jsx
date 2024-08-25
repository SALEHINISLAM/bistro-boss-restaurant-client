import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedComponents/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = props => {
    const [menu]=useMenu()
    const desserts=menu.filter(item=>item.category==='dessert')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const soup=menu.filter(item=>item.category==='soup')
    const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={'https://i.ibb.co/PQtHFzr/banner3.jpg'} heading={'OUR MENU'} subHeading={'would you like to try a dish ?'}/>
            <SectionTitle heading={'Don\'t miss'} subheading={'TODAY\'S OFFER'}/>
            <MenuCategory items={offered}/>
            <Cover img={'https://i.ibb.co/0ycs0mQ/dessert-bg.jpg'} heading={'desserts'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={desserts} link={'dessert'}/>
            <Cover img={'https://i.ibb.co/wrtxbVY/pizza-bg.jpg'} heading={'pizza'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={pizza} link={'pizza'}/>
            <Cover img={'https://i.ibb.co/GVZfhn1/salad-bg.jpg'} heading={'salads'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={salad} link={'salad'}/>
            <Cover img={'https://i.ibb.co/Gx6MHKY/soup-bg.jpg'} heading={'soups'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={soup} link={'soup'}/>
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;