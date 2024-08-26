import React from 'react';
import { FaCalendar, FaCalendarCheck, FaHome, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { IoMdBookmarks } from 'react-icons/io';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiMessage3Fill } from 'react-icons/ri';
import { TiThMenu, TiThMenuOutline } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin]=useAdmin()
    return (
        <div className='flex'>
            <div className="w-64 min-h-svh bg-orange-400 text-black">
                {
                    isAdmin ?<ul className='menu uppercase font-cinzel'>
                    <li>
                        <NavLink to={'/dashboard/adminHome'}>
                        <FaHome/>
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/additem'}>
                        <FaUtensils />
                            add items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/manageitems'}>
                        <TiThMenuOutline />
                            Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}>
                        <IoMdBookmarks />
                            manage bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/users'}>
                        <FaUsers />
                            all users
                        </NavLink>
                    </li>
                </ul>: 
                <ul className='menu'>
                <li>
                    <NavLink to={'/dashboard/userHome'}>
                    <FaHome/>
                        User Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard/reservation'}>
                    <FaCalendar/>
                        Reservation
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard/cart'}>
                    <FaShoppingCart/>
                        My Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard/review'}>
                    <MdOutlineRateReview/>
                        Add Review
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard/booking'}>
                    <FaCalendarCheck/>
                        My Booking
                    </NavLink>
                </li>
            </ul>
                }
                <hr />
                <ul className='menu'>
                    <li>
                        <NavLink to={'/'}>
                        <FaHome/>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}>
                        <TiThMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}>
                        <IoFastFoodOutline />
                            Order Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>
                        <RiMessage3Fill />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;