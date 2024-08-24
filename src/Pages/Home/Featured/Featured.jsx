import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../../Components/SectionTitle';

const Featured = props => {
    return (
        <div className="bg-[url('https://i.ibb.co/rZXMskB/featured.jpg')] bg-fixed my-10">
            <div className="bg-black w-full h-full py-10 bg-opacity-50 text-white px-4 md:px-8 lg:px-10">
            <SectionTitle heading={'Check it out'} subheading={'FROM OUR MENU'} bg={true}/>
            
            <div className="text-white">
                <div className="container mx-auto md:flex items-center justify-center">
                <div className="">
                    <img src="https://i.ibb.co/rZXMskB/featured.jpg" alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Today {
                            new Date().getDate()
                        }-
                        {
                            new Date().getMonth()
                        }-
                        {
                            new Date().getFullYear()
                        }
                    </p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className='btn bg-transparent border-b-2 border-t-0 border-r-0 text-white border-l-0 border-b-white'>
                    Read More
                    </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

Featured.propTypes = {
    
};

export default Featured;