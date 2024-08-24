import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedComponents/Footer/Footer';
import Navbar from '../Pages/SharedComponents/Navbar/Navbar';

const Main = props => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;